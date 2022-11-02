import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const approveTransaction: any = createAsyncThunk(
  "USER/APPROVE_TRANSACTION",
  async (id: string, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.request({
        url: `${process.env.SERVICE_URL}/transactions/approve/${id}`,
        method: "PUT",
      });

      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const slice = createSlice({
  name: "USER/APPROVE_TRANSACTION",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(approveTransaction.pending, (_, action) => action);
    builder.addCase(approveTransaction.fulfilled, (_, action) => action);
    builder.addCase(approveTransaction.rejected, (_, action) => action);
  },
});
