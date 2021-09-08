import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import cartUiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    cartUi: cartUiReducer,
  },
});

export default store;
