import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";

const initialState: Product[] = [];

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Product>)=>{
            state.push(action.payload)
        }
    }
});

export const { add } = cart.actions;
export default cart.reducer;