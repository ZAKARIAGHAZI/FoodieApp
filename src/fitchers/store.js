// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "./restaurantsSlice";
import menuReducer from "./menuSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    menu: menuReducer,
  },
});
