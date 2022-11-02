import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { login } from "./auth/login";
import { setProfile } from "./user/profile";

export const initApp = createAsyncThunk("APP/INIT", async (_, { dispatch }) => {
  const token = localStorage.getItem("token") || "";
  if (token) {
    const userInfo = await jwt_decode(token);
    axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
    dispatch(setProfile(userInfo));
  }
});
