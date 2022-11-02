import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createTransaction: any = createAsyncThunk(
  "USER/CREATE_TRANSACTION",
  async (payload: any, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.request({
        url: `${process.env.SERVICE_URL}/transactions/create`,
        method: "POST",
        data: payload,
      });

      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const slice = createSlice({
  name: "USER/CREATE_TRANSACTION",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTransaction.pending, (_, action) => action);
    builder.addCase(createTransaction.fulfilled, (_, action) => action);
    builder.addCase(createTransaction.rejected, (_, action) => action);
  },
});
