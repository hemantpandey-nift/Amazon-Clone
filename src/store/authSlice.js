import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null, isLoggedIn: false, expirationTime: "" };
const authSlice = createSlice({
  name: "Authentication",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.expirationTime = action.payload.expirationTime;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
      state.expirationTime = "";
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
