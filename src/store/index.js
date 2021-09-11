import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cartUiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartUi: cartUiReducer,
  },
});
export default store;
