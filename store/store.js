
import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth'
export let meraStore = configureStore({
  reducer:authSlice.reducer
})