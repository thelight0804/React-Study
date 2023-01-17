import { configureStore } from '@reduxjs/toolkit'
import user from './userSlice.js'
import productCart from './productSlice.js'

export default configureStore({
  reducer: { 
    productCart : productCart.reducer,
    user : user.reducer
  }
}) 