import { configureStore, createSlice } from '@reduxjs/toolkit'

let productCart = createSlice({
  name : "cart",
  initialState : 
  [
    {id : 0, name : 'Galaxy Z Flip4', count : 2},
    {id : 2, name : 'Galaxy S22', count : 1}
  ] 
})

export default configureStore({
  reducer: { 
    productCart : productCart.reducer,
  }
}) 