import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    // გაერთიანებულია ყველა reducer აქ მთავარში
    reducer: {
        cart: cartReducer,
    }
});

export default appStore;