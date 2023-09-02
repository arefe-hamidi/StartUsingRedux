import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthanticated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthanticated = true;
    },
    logout(state) {
      state.isAuthanticated = false;
    },
  },
});
export const authAction = authSlice.actions;
export default authSlice.reducer;
