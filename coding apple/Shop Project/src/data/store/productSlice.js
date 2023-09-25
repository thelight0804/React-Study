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
      let dataId = state.find((a)=>{
        return a.id == action.payload
      })
      dataId.count ++;
    },
    addItem(state, action){
      let dataId = state.findIndex((a)=>{
        return a.id == action.payload.id
      })
      console.log(dataId)
      if(dataId != -1)
        state[dataId].count ++;
      else{
        let productObj = {
          id : action.payload.id,
          name : action.payload.title,
          count : 1
        }
        state.push(productObj)
      }
    },
    delItem(state, action){
      let dataId = state.findIndex((a)=>{
        return a.id == action.payload
      })
      state[dataId].count --;
      if(state[dataId].count == 0){
        state.splice(dataId, 1);
      }
    }
  }
})

export let {addCount, addItem, delItem} = productCart.actions;
export default productCart