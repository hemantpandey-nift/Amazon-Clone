import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cartUiReducer from "./uiSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartUi: cartUiReducer,
    auth: authReducer,
  },
});
export default store;
