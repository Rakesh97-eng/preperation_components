import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartvalue:56
    },
    reducers:{
        addcartValue:(state,action)=>{
            state.cartvalue= state.cartvalue+action.payload
        }   
    }
})

export const {addcartValue} = cartSlice.actions;

export const cartreducer = cartSlice.reducer;