import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../Components/axios";
const initialState = { errorA: null, successA: null, loadingA: false };
export const verify = createAsyncThunk(
  "auth/verify",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.post("/email/verification-notification");
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.successA = null;
      state.errorA=null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(verify.pending, (state, action) => {
      state.successA = null;
      state.errorA = null;
      state.loadingA = true;
    });
    builder.addCase(verify.fulfilled, (state, action) => {
      console.log(action);
      state.errorA = null;
      state.loadingA = false;
      state.successA = action.payload.message;
      console.log(action);
    });
    builder.addCase(verify.rejected, (state, action) => {
      state.errorA = action.payload.message;
      state.successA = null;
      state.loadingA = false;
    });
  },
});
export default authSlice.reducer;
export const { reset } = authSlice.actions;
