import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from 'app/api'
import { toast } from 'react-toastify'

// async
export const createPoll = createAsyncThunk(
  'polls/createPoll',
  async (
    { addresses, text, start_date, end_date },
    { rejectWithValue, dispatch },
  ) => {
    try {
      const response = await API.request('/polls', { method: 'POST', dispatch })
      return Promise.resolve()
    } catch {
      return rejectWithValue()
    }
  },
)

export const fetchCurrentPoll = createAsyncThunk(
  'polls/fetchCurrentPoll',
  async ({ uuid }, { rejectWithValue, dispatch }) => {
    try {
      const poll = await API.request('/polls', {
        dispatch,
      })
      return { poll }
    } catch {
      return rejectWithValue()
    }
  },
)

// reducers
export const pollsSlice = createSlice({
  name: 'polls',
  initialState: {
    plannedPolls: [
      {
        type: 'active',
        text:
          'Организация кворумов - Добрый день! 10.06.20 и 15.06.20 с 9 до 12 и с 18 до 20 каждая квартира сможет проголосовать. Вся информация по голосованию уже доступна в общедомовом чате. После сигнала назовите удобную дату и время для заполнения бюллетеня',
        start_date: '2017-05-24T10:30',
        end_date: '2017-05-24T11:30',
        uuid: 1,
      },
      {
        type: 'pending',
        text: 'Оцените качество услуг РТК по десяти бальной шкале',
        start_date: '2017-05-24T10:30',
        end_date: '2017-05-24T11:30',
        uuid: 2,
      },
    ],
    archivedList: [
      {
        type: 'success',
        text: 'Когда Вам удобно будет провести референдум?',
        start_date: '2017-05-24T10:30',
        end_date: '2017-05-24T11:30',
        uuid: 3,
      },
      {
        type: 'cancelled',
        text: 'Оцените качество услуг РТК по десяти бальной шкале',
        start_date: '2017-05-24T10:30',
        end_date: '2017-05-24T11:30',
        uuid: 4,
      },
    ],
    current: {
      type: 'success',
      text:
        'Организация кворумов - Добрый день! 10.06.20 и 15.06.20 с 9 до 12 и с 18 до 20 каждая квартира сможет проголосовать. Вся информация по голосованию уже доступна в общедомовом чате. После сигнала назовите удобную дату и время для заполнения бюллетеня',
      start_date: '2017-05-24T10:30',
      end_date: '2017-05-24T11:30',
      uuid: 3,
      data: [
        {
          id: 'javascript',
          label: 'javascript',
          value: 390,
          color: 'hsl(137, 70%, 50%)',
        },
        {
          id: 'elixir',
          label: 'elixir',
          value: 464,
          color: 'hsl(270, 70%, 50%)',
        },
        {
          id: 'c',
          label: 'c',
          value: 483,
          color: 'hsl(298, 70%, 50%)',
        },
        {
          id: 'rust',
          label: 'rust',
          value: 158,
          color: 'hsl(191, 70%, 50%)',
        },
        {
          id: 'css',
          label: 'css',
          value: 435,
          color: 'hsl(220, 70%, 50%)',
        },
      ],
      addresses: [
        {
          short_address: 'Козина 3а',
        },
        {
          short_address: 'Тандем',
        },
        {
          short_address: 'Тандем',
        },
        {
          short_address: 'Тандем',
        },
        {
          short_address: 'Тандем',
        },
        {
          short_address: 'Тандем',
        },
        {
          short_address: 'Тандем',
        },
        {
          short_address: 'Тандем',
        },
        {
          short_address: 'Тандем',
        },
        {
          short_address: 'Тандем',
        },
        {
          short_address: 'Тандем',
        },
        {
          short_address: 'Тандем',
        },
        {
          short_address: 'Тандем',
        },
        {
          short_address: 'Тандем',
        },
        {
          short_address: 'Тандем',
        },
        {
          short_address: 'Тандем',
        },
        {
          short_address: 'Тандем',
        },
      ],
    },
  },
  extraReducers: {
    [createPoll.pending]: () => console.log('pending'),
    [createPoll.fulfilled]: (state, { payload }) => {
      toast.message('Новый опрос был успешно создан')
    },
    [createPoll.rejected]: () => console.log('rejected'),
    [fetchCurrentPoll.fulfilled]: (state, { payload }) =>
      (state.current = payload),
  },
})

export const {} = pollsSlice.actions
export default pollsSlice.reducer
