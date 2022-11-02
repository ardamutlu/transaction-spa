import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { setProfile } from "../user/profile";

export type ILogin = {
  access_token: string;
};

type Props = {
  email?: string;
  password?: string;
};

export const login: any = createAsyncThunk(
  "AUTH/LOGIN",
  async (
    { email, password }: Props,
    { dispatch, rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await axios.request({
        url: `${process.env.SERVICE_URL}/auth/login`,
        method: "POST",
        data: { email, password },
      });

      const userInfo = await jwt_decode(data.access_token);

      axios.defaults.headers.common = {
        Authorization: `Bearer ${data.access_token}`,
      };

      dispatch(setProfile(userInfo));

      // Save Token
      localStorage.setItem("token", data.access_token);

      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const verify: any = createAsyncThunk(
  "AUTH/VERIFY",
  async (_, { dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const userInfo = await jwt_decode(token);
        axios.defaults.headers.common = {
          Authorization: `Bearer ${token}`,
        };
        dispatch(setProfile(userInfo));
        return fulfillWithValue({ access_token: token });
      }
      return rejectWithValue(null);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const slice = createSlice({
  name: "AUTH/LOGIN",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (_, action) => action);
    builder.addCase(login.fulfilled, (_, action) => action);
    builder.addCase(login.rejected, (_, action) => action);
    builder.addCase(verify.pending, (_, action) => action);
    builder.addCase(verify.fulfilled, (_, action) => action);
    builder.addCase(verify.rejected, (_, action) => action);
  },
});
