import {createSlice} from '@reduxjs/toolkit'

let productCart = createSlice({
  name : "cart",
  initialState : 
  [
    {id : 0, name : 'Galaxy Z Flip4', count : 2},
    {id : 2, name : 'Galaxy S22', count : 1}
  ],
  reducers : {
    addCount(state, action){
      let dataId = state.find(function(x){
        return x.id == action.payload;
      })
      dataId.count ++;
    }
  }
})

export let {addCount} = productCart.actions;
export default productCart