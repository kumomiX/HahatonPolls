import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { increment } from 'features/counter/counterSlice'
import API from 'app/api'

// async
export const fetchList = createAsyncThunk(
  'cameras/fetchList',
  async (args, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.request('/cameras', { dispatch })
      return response.data
    } catch {
      return rejectWithValue()
    }
  },
)

// reducers
export const camerasSlice = createSlice({
  name: 'cameras',
  initialState: {
    list: [],
  },
  extraReducers: {
    [increment]: (state, action) => {
      state.list.push({ name: 'new camera' })
    },
    [fetchList.pending]: () => console.log('pending'),
    [fetchList.fulfilled]: () => console.log('fulfilled'),
    [fetchList.rejected]: () => console.log('rejected'),
  },
})

// export const {} = camerasSlice.actions
export default camerasSlice.reducer
