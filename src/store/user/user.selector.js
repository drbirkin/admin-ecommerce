import { createSelector } from '@reduxjs/toolkit'
import { userSlice } from './user.reducer'

const selectUserReducer = (state) => state.user

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (acctSlice) => acctSlice.currentUser
)

export const selectUserSpinner = createSelector(
  [selectUserReducer],
  (acctSlice) => acctSlice.status
)
