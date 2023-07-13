import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSalice";
import loginSlice from "./loginSlice";
import registerSlice from "./registerSlice";
const store = configureStore({
  reducer: {
    authSlice,
    loginSlice,
    registerSlice,
  },
});
export default store;
