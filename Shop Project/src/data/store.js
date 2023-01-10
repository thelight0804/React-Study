import { configureStore, createSlice } from '@reduxjs/toolkit'

let productCart = createSlice({
  name : "cart",
  initialState : 
  [
    {id : 0, name : 'Galaxy Z Flip4', count : 2},
    {id : 2, name : 'Galaxy S22', count : 1}
  ],
  reducer : {
    getProductCart(){
      return console.log("productCart");
    }
  }
})

let user= createSlice({
  name : "user",
  initialState : "thelight0804",
  reducers : {
    changeName(){
      return "Park";
    }
  }
})

export let {getProductCart} = productCart.actions;
export let {changeName} = user.actions;

export default configureStore({
  reducer: { 
    productCart : productCart.reducer,
    user : user.reducer
  }
}) 