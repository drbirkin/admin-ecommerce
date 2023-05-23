import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  currentUser: {},
  status: '',
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser(state = INITIAL_STATE, action = {}) {
      //   console.log(action.payload)
      state.currentUser = action.payload
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
