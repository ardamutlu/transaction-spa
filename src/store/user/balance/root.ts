import { combineReducers } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/default";
import * as readBalance from "./readBalance";
import * as updateBalance from "./updateBalance";

export type IBalance = {
  _id: string;
  amount: string;
  user: string;
};

export type BalanceState = {
  read_balance: InitialState<IBalance>;
  update_balance: InitialState<IBalance>;
};

export const balanceRootReducer = combineReducers({
  read_balance: readBalance.slice.reducer,
  update_balance: updateBalance.slice.reducer,
});
