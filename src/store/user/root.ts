import { combineReducers } from "@reduxjs/toolkit";
import * as profile from "./profile";
import { balanceRootReducer, BalanceState } from "./balance/root";
import {
  TransactionsState,
  transactionsRootReducer,
} from "./transactions/root";

export type UserState = {
  profile: any;
  balance: BalanceState;
  transactions: TransactionsState;
};

export const userRootReducer = combineReducers({
  profile: profile.slice.reducer,
  balance: balanceRootReducer,
  transactions: transactionsRootReducer,
});
