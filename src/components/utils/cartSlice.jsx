import { createSlice } from "@reduxjs/toolkit"

const cartSlice =  createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    //es coresponds actions
    reducers: {
        //mutating the state 
        // state - ძველი მდგომარეობა action - პროდუქტის დამატება
        addItem: (state, action) =>{
            state.items.push(action.payload);
        },

        removeItem: (state, action) => {
            state.items.pop(action.payload);
        },

        clearCart: (state, action) => {
            state.items.length = 0;
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;