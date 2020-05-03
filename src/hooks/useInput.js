import { useState } from 'react'

const useInput = (initialValue, cb) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(initialValue),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value)
        if (cb) {
          cb()
        }
      },
    },
  }
}

export default useInput
