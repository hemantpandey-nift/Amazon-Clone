import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartVisibility: false,
  notification: { status: "", title: "", message: "" },
};
const uiSlice = createSlice({
  name: "cartVisibility",
  initialState: initialState,
  reducers: {
    toggleCart(state) {
      state.cartVisibility = !state.cartVisibility;
    },
    showNotification(state, action) {
      const { status, title, message } = action.payload;
      state.notification = { status: status, title: title, message: message };
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
