import React from 'react'
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoia3Vtb21pIiwiYSI6ImNrMjNjdGhheTA4ZTEzYnFtZTMwbnluY20ifQ.bEFOoXk1dRroA46CblYjNQ',
  minZoom: 8,
  maxZoom: 15,
})

const Mark = styled.div`
  background-color: ${({ theme, color = 'secondary' }) =>
    theme.palette[color].main};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 4px solid
    ${({ theme, color = 'secondary' }) => theme.palette[color].lighter};
`

const CustomMap = ({ style = {}, ...props }) => {
  const addresses = useSelector(({ addresses }) => addresses.list)
  const firstAddress = addresses?.[0]

  const selectedAddresses = useSelector(({ addresses }) => addresses.selected)

  return (
    <Map
      /* eslint-disable-next-line */
      style="mapbox://styles/mapbox/light-v10"
      containerStyle={style}
      pitch={[33]}
      attributionControl={false}
      dragRotate={false}
      center={firstAddress?.location}
      zoom={[12]}
      {...props}
    >
      {firstAddress && (
        <Marker coordinates={firstAddress.location}>
          <Mark color="primary" />
        </Marker>
      )}
      {selectedAddresses.map((a) => (
        <Marker coordinates={a.location}>
          <Mark />
        </Marker>
      ))}
    </Map>
  )
}

export default CustomMap
