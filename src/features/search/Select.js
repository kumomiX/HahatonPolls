import React from 'react'
import Select from 'react-select'

export default class MyAsyncSelect extends React.Component {
  /* Select component reference can be used to get currently focused option */
  getFocusedOption() {
    return this.ref.select.state.focusedOption
  }

  /* we'll store lastFocusedOption as instance variable (no reason to use state) */
  componentDidMount() {
    this.lastFocusedOption = this.getFocusedOption()
  }

  /* Select component reference can be used to check if menu is opened */
  isMenuOpen() {
    return this.ref.select.state.isFocused
  }

  /* This function will be called after each user interaction (click, keydown, mousemove).
     If menu is opened and focused value has been changed we will call onFocusedOptionChanged 
     function passed to this component using props. We do it asynchronously because onKeyDown
     event is fired before the focused option has been changed.
  */
  onUserInteracted = () => {
    Promise.resolve().then(() => {
      const focusedOption = this.getFocusedOption()

      if (
        this.isMenuOpen() &&
        this.lastFocusedOption !== focusedOption &&
        focusedOption
      ) {
        this.lastFocusedOption = focusedOption
        this.props.onFocusedOptionChanged(focusedOption)
      }
    })
  }

  /* in render we're setting onUserInteracted method as callback to different user interactions */
  render() {
    return (
      <div onMouseMove={this.onUserInteracted} onClick={this.onUserInteracted}>
        <Select
          {...this.props}
          ref={(ref) => (this.ref = ref)}
          onKeyDown={this.onUserInteracted}
        />
      </div>
    )
  }
}
