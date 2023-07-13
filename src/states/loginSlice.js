import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { loading: false, errorL: null, successL: null };
export const login = createAsyncThunk("login/login", async (item, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const { data } = await axios.post("http://localhost:8000/api/login", {
      email: item.email,
      password: item.password,
    });
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.successL = null;
      state.errorL=null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.successL = null;
      state.errorL = null;
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.errorL = null;
      state.loading = false;
      state.successL = action.payload.message;
      console.log(action);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.errorL = action.payload.message;
      state.successL = null;
    });
  },
});
export default loginSlice.reducer;
export const { reset } = loginSlice.actions;
