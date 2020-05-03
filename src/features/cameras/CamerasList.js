import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function CamerasList(props) {
  const cameras = useSelector(({ cameras }) => cameras.list)
  return (
    <ul>
      {cameras?.map((camera) => (
        <li>{camera.name}</li>
      ))}
    </ul>
  )
}

export default CamerasList
