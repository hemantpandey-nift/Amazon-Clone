import { createSlice } from "@reduxjs/toolkit";
import { retreiveStoredToken } from "./authHelper";

const tokenData = retreiveStoredToken();

let initialState;
if (tokenData) {
  initialState = {
    token: tokenData.token,
    isLoggedIn: true,
    expirationTime: tokenData.duration,
  };
} else {
  initialState = {
    token: null,
    isLoggedIn: false,
    expirationTime: null,
  };
}

const authSlice = createSlice({
  name: "Authentication",
  initialState: initialState,
  reducers: {
    logout(state) {
      console.log("in logout");
      state.token = null;
      state.isLoggedIn = false;
      state.expirationTime = null;
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
    },
    login(state, action) {
      state.token = action.payload.token;
      state.expirationTime = action.payload.expirationTime;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("expirationTime", action.payload.expirationTime);
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
