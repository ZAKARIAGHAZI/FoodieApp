// src/fitchers/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      // Recalculate totals
      state.totalQuantity = state.items.reduce((sum, i) => sum + i.quantity, 0);
      state.totalPrice = state.items.reduce(
        (sum, i) => sum + (i.price || 0) * i.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);

      // Recalculate totals
      state.totalQuantity = state.items.reduce((sum, i) => sum + i.quantity, 0);
      state.totalPrice = state.items.reduce(
        (sum, i) => sum + (i.price || 0) * i.quantity,
        0
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
