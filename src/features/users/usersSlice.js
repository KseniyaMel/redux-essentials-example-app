import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'Kseniya' },
  { id: '2', name: 'Vlad' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})
export default usersSlice.reducer
