import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSalice";
import loginSlice from "./loginSlice";
const store = configureStore({
  reducer: {
    authSlice,
    loginSlice,
  },
});
export default store;
