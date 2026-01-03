import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // ✅ ADD ITEM
    addItem: (state, action) => {
      const product = action.payload;

      // Check if item already exists in cart
      const existingItem = state.items.find(
        (item) => item.name === product.name
      );

      if (existingItem) {
        // If item exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // Add new item with quantity 1
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    // ✅ REMOVE ITEM
    removeItem: (state, action) => {
      const productName = action.payload;

      state.items = state.items.filter(
        (item) => item.name !== productName
      );
    },

    // ✅ UPDATE QUANTITY
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Destructure name and quantity

      const itemToUpdate = state.items.find(
        (item) => item.name === name
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update quantity
      }
    },
  },
});

// ✅ Export actions for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// ✅ Export reducer for store.js
export default CartSlice.reducer;
