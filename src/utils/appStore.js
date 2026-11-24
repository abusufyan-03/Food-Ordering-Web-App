import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

appStore.subscribe(()=>{
    localStorage.setItem("cart", JSON.stringify(appStore.getState().cart.items));
})

export default appStore;