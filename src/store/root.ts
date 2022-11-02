import { combineReducers } from "@reduxjs/toolkit";
import { UserState, userRootReducer } from "./user/root";
import { authRootReducer, AuthState } from "./auth/root";

export type StoreState = {
  auth: AuthState;
  user: UserState;
};

export const rootReducer = combineReducers({
  auth: authRootReducer,
  user: userRootReducer,
});
