import { createSlice } from "@reduxjs/toolkit";

// const item = {
//     id: id,
//     image: image,
//     price: price,
//     description: description,
//     quantity: 1,
//   }

const initialCartState = { cartItems: [], quantity: 0, changed: false };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.quantity = action.payload.quantity;
      state.cartItems = action.payload.cartItems;
    },
    addProductToCart(state, action) {
      console.log("clicked 2");
      state.changed = true;
      state.quantity = state.quantity + action.payload.quantity;

      const itemInCartIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingItem = state.cartItems[itemInCartIndex];

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };

        state.cartItems = [...state.cartItems];
        state.cartItems[itemInCartIndex] = updatedItem;
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
      console.log(state.cartItems);
    },

    removeProductFromCart(state, action) {
      state.changed = true;
      state.quantity = state.quantity - 1;

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      const targetItem = state.cartItems[itemIndex];

      if (targetItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      } else {
        const updatedItem = {
          ...targetItem,
          quantity: targetItem.quantity - 1,
        };
        state.cartItems = [...state.cartItems];
        state.cartItems[itemIndex] = updatedItem;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
