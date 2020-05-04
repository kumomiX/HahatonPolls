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
    focusedOption: null,
  },
  reducers: {
    selectAddresses: (state, { payload }) => {
      state.selected = payload.addresses || []
    },
    setFocusedOption: (state, { payload }) => {
      state.focusedOption = payload
    },
  },
  extraReducers: {
    [searchAddresses.fulfilled]: (state, { payload }) => {
      const normalized = payload.map((address) => {
        let [a, b] = address.location

        ;[a, b] = [b, a]

        return { ...address, location: [a, b] }
      })
      state.list = normalized
      state.focusedOption = normalized[0]
    },
  },
})

export const { selectAddresses, setFocusedOption } = addressesSlice.actions
export default addressesSlice.reducer
