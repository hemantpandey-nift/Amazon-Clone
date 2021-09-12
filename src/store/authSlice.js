import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null, expirationTime: "" };
const authSlice = createSlice({
  name: "Authentication",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.expirationTime = action.payload.expirationTime;
    },
    logout(state) {
      state.token = null;
      state.expirationTime = "";
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
