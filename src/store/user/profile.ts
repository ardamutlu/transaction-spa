import { createSlice } from "@reduxjs/toolkit";

export type IProfile = {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  sub: string;
  iat: number;
  exp: number;
} | null;

export const slice = createSlice({
  name: "USER/PROFILE",
  initialState: null,
  reducers: {
    setProfile: (_, action) => {
      return action.payload;
    },
  },
});

export const { setProfile } = slice.actions;
