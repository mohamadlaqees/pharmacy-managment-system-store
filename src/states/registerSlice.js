import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../Components/axios";
import { verify } from "./authSalice";
const initialState = { loading: false, errorR: null, successR: null };
export const register = createAsyncThunk(
  "register/register",
  async (item, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      const { data } = await axios.post("/register", {
        email: item.email,
        password: item.password,
        password_confirmation: item.password,
        first_name: item.first_name,
        last_name: item.last_name,
        date_of_birth: item.birthdate,
        address: item.address,
        gender: item.gender,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.successR = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.successR = null;
      state.errorR = null;
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.errorR = null;
      state.loading = false;
      state.successR = action.payload.message;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.successR = null;
      state.errorR = action.payload.message;
    });
  },
});
export default registerSlice.reducer;
export const { reset } = registerSlice.actions;
