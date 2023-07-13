import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../Components/axios";
const initialState = {
  loading: false,
  errorL: null,
  successL: null,
  userData: {},
};
export const login = createAsyncThunk("login/login", async (item, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const { data } = await axios.post("/login", {
      email: item.email,
      password: item.password,
    });
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const getUserData = createAsyncThunk(
  "login/get",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get("/user");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.successL = null;
      state.errorL = null;
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
    });
    builder.addCase(login.rejected, (state, action) => {
      state.errorL = action.payload.message;
      state.successL = null;
    });
    builder.addCase(getUserData.pending, (state, action) => {
      state.successL = null;
      state.errorL = null;
      state.loading = true;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.errorL = null;
      state.loading = false;
      state.userData = action.payload;
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.errorL = action.payload.message;
      state.successL = null;
    });
  },
});
export default loginSlice.reducer;
export const { reset } = loginSlice.actions;
