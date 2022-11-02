import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const readBalance: any = createAsyncThunk(
  "USER/READ_BALANCE",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.request({
        url: `${process.env.SERVICE_URL}/balance`,
        method: "GET",
      });

      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const slice = createSlice({
  name: "USER/READ_BALANCE",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readBalance.pending, (_, action) => action);
    builder.addCase(readBalance.fulfilled, (_, action) => action);
    builder.addCase(readBalance.rejected, (_, action) => action);
  },
});
