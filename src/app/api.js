/* eslint-disable */

import config from 'app/config'
// import store from 'app/store'

class Api {
  constructor(baseUri) {
    this.baseUri = baseUri
  }

  /**
   * Makes a redirect to the SSO if err status is 401, returns a Promise.reject
   *
   * @param {*} err
   * @returns {Promise<Response>}
   * @memberof Api
   */
  _handleError(err: any): Promise<Response> {
    if (err.status === 401) {
      // store.dispatch(signOut())
    }

    return Promise.reject(err)
  }

  /**
   * Makes an api request, handles error status 401
   *
   * @param {string} endpoint - the endpoint, that gets appended to the (default) baseUri
   * @param {?Object} [options={}] - custom request options, override default ones
   * @param {?string} baseUri - custom baseUri
   * @returns {Promise<any>}
   * @memberof Api
   */
  request(
    endpoint: string,
    options: ?Object = {},
    baseUri: ?string,
    omitContentType = false,
  ): Promise<any> {
    console.log('request')

    const dispatch = options.dispatch
    // dispatch(incrementByAmount(100))

    const BASE_URI: string = baseUri || this.baseUri

    const jwt = localStorage.getItem('jwt')

    const headers = new Headers({
      Authorization: `Bearer ${jwt}`,
    })

    if (!omitContentType) {
      headers.append('Content-Type', 'application/json')
    }

    const request = new Request(`${BASE_URI}${endpoint}`, {
      headers,
      credentials: 'include',
      ...options,
    })

    // return this._handleError()

    return fetch(request)
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .catch(this._handleError)
  }
}

const api = new Api(config.baseUri)

export default api
