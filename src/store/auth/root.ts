import { combineReducers } from "@reduxjs/toolkit";
import * as login from "./login";

export type AuthState = {
  login: login.ILogin;
};

export const authRootReducer = combineReducers({
  login: login.slice.reducer,
});
