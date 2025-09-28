import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : {items: []};
}

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}


const appStore = configureStore({
    // გაერთიანებულია ყველა reducer აქ მთავარში
    reducer: {
        cart: cartReducer,
    },
    
    preloadedState: {
        cart: loadCartFromLocalStorage(),
    }
});

appStore.subscribe(() => {
    const state = appStore.getState();
    saveCartToLocalStorage(state.cart);
})

export default appStore;