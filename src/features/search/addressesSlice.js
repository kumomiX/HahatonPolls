import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from 'app/api'

// async
export const searchAddresses = createAsyncThunk(
  'addresses/searchAddresses',
  async (q, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.request(`/addresses?q=${q}`, { dispatch })
      return response
    } catch {
      return rejectWithValue()
    }
  },
)

// reducers
export const addressesSlice = createSlice({
  name: 'addresses',
  initialState: {
    list: [],
    selected: [],
  },
  reducers: {
    selectAddresses: (state, { payload }) => {
      state.selected = payload.addresses || []
    },
  },
  extraReducers: {
    [searchAddresses.fulfilled]: (state, { payload }) => {
      state.list = payload
    },
  },
})

export const { selectAddresses } = addressesSlice.actions
export default addressesSlice.reducer
