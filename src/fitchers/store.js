// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "./restaurantsSlice";
import cartReducer from "./cartSlice";
import menuReducer from "./menuSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    menu: menuReducer,
    cart: cartReducer,
  },
});
