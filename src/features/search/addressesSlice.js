import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from 'app/api'

// async
export const searchAddresses = createAsyncThunk(
  'addresses/searchAddresses',
  async (q, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.request(`/addresses?q=${q}`, { dispatch })
      return response.data
    } catch {
      return rejectWithValue()
    }
  },
)

// reducers
export const addressesSlice = createSlice({
  name: 'addresses',
  initialState: {
    list: [
      {
        short_address: 'Козина 3а',
        uuid: '12312313133',
        location: [49.1340302, 55.814858],
      },
      {
        short_address: 'Тандем',
        uuid: '12312313',
        location: [49.0850706, 55.8208565],
      },
    ],
    selected: [],
  },
  reducers: {
    selectAddresses: (state, { payload }) => {
      state.selected = payload.addresses || []
    },
  },
  extraReducers: {
    [searchAddresses.pending]: () => console.log('pending'),
    [searchAddresses.fulfilled]: (state, { payload }) => {
      state.list = payload
    },
    [searchAddresses.rejected]: () => console.log('rejected'),
  },
})

export const { selectAddresses } = addressesSlice.actions
export default addressesSlice.reducer
