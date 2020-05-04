import { combineReducers } from '@reduxjs/toolkit'

import addresses from 'features/search/addressesSlice'
import polls from 'features/polls/pollsSlice'

export default combineReducers({
  addresses,
  polls,
})
