import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateBalance: any = createAsyncThunk(
  "USER/UPDATE_BALANCE",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      return fulfillWithValue(null);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const slice = createSlice({
  name: "USER/UPDATE_BALANCE",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateBalance.pending, (_, action) => action);
    builder.addCase(updateBalance.fulfilled, (_, action) => action);
    builder.addCase(updateBalance.rejected, (_, action) => action);
  },
});
