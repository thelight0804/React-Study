import {createSlice} from '@reduxjs/toolkit'

let user= createSlice({
  name : "user",
  initialState : {name : "thelight0804", age : 24},
  reducers : {
    changeName(state){
      state.name = "Park";
    },
    plusAge(state, action){
      state.age += action.payload;
    }
  }
})

export let {changeName, plusAge} = user.actions;

export default user