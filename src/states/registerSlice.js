import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { loading: false, error: null };
export const register = createAsyncThunk(
  "register/register",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.post("http://localhost:8000/api/register", {
        email: item.email,
        password: item.password,
        first_name:item.first_name,
        last_name:item.last_name,
        date_of_birth:item.birthdate,
        address:item.address,
        gender:item.gender,
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      console.log(action);
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export default registerSlice.reducer;
