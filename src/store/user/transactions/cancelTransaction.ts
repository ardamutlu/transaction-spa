import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cancelTransaction: any = createAsyncThunk(
  "USER/CANCEL_TRANSACTION",
  async (id: string, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.request({
        url: `${process.env.SERVICE_URL}/transactions/cancel/${id}`,
        method: "PUT",
      });

      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const slice = createSlice({
  name: "USER/CANCEL_TRANSACTION",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(cancelTransaction.pending, (_, action) => action);
    builder.addCase(cancelTransaction.fulfilled, (_, action) => action);
    builder.addCase(cancelTransaction.rejected, (_, action) => action);
  },
});
