import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from 'app/api'
import { toast } from 'react-toastify'

// async
export const createPoll = createAsyncThunk(
  'polls/createPoll',
  async (
    { addresses, text, startDate, endDate },
    { rejectWithValue, dispatch },
  ) => {
    try {
      const response = await API.request('/polls', { method: 'POST', dispatch })
      return Promise.resolve()
    } catch {
      return Promise.reject()
    }
  },
)

// reducers
export const pollsSlice = createSlice({
  name: 'polls',
  initialState: {},
  extraReducers: {
    [createPoll.pending]: () => console.log('pending'),
    [createPoll.fulfilled]: (state, { payload }) => {
      // state.list = payload
      toast.message('Новый опрос был успешно создан')
    },
    [createPoll.rejected]: () => console.log('rejected'),
  },
})

export const {} = pollsSlice.actions
export default pollsSlice.reducer
