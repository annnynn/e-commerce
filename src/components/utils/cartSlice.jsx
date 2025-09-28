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
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
      
     incrementQuantity: (state, action) => {
        const item = state.items.find(item => item.id === action.payload);
          if (item) {
          item.quantity = Number(item.quantity) + 1;
      }
    },
        decrementQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
            item.quantity = Number(item.quantity) - 1;
      }
    },

        clearCart: (state, action) => {
            state.items.length = 0;
        },
    },
});

export const {addItem, removeItem, clearCart, incrementQuantity, decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;