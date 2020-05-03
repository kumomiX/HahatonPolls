import { combineReducers } from '@reduxjs/toolkit'

import counter from 'features/counter/counterSlice'
import addresses from 'features/search/addressesSlice'

export default combineReducers({
  counter,
  addresses,
})
