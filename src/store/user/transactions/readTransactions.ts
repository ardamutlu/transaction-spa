import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const readTransactions: any = createAsyncThunk(
  "USER/READ_TRANSACTIONS",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.request({
        url: `${process.env.SERVICE_URL}/transactions`,
        method: "GET",
      });

      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const slice = createSlice({
  name: "USER/READ_TRANSACTIONS",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readTransactions.pending, (_, action) => action);
    builder.addCase(readTransactions.fulfilled, (_, action) => action);
    builder.addCase(readTransactions.rejected, (_, action) => action);
  },
});
