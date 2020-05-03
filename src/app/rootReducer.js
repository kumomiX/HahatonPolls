import { combineReducers } from '@reduxjs/toolkit'

import counter from 'features/counter/counterSlice'
import addresses from 'features/search/addressesSlice'
import polls from 'features/polls/pollsSlice'

export default combineReducers({
  counter,
  addresses,
  polls,
})
