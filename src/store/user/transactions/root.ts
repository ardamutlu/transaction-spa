import { combineReducers } from "@reduxjs/toolkit";
import { InitialState } from "../../../types/default";
import * as createTransaction from "./createTransaction";
import * as readTransactions from "./readTransactions";
import * as approveTransaction from "./approveTransaction";
import * as cancelTransaction from "./cancelTransaction";

export type ITransaction = {
  _id: string;
  user: string;
  sender_name: string;
  beneficiary_name: string;
  currency: string;
  sender_amount: string;
  beneficiary_amount: string;
  commission: string;
  rate: string;
  creation_date: string;
  beneficiary_type: string;
  sender_type: string;
  status: string;
  completion_date: string;
};

export type TransactionsState = {
  create_transaction: InitialState<ITransaction>;
  read_transactions: InitialState<ITransaction>;
  approve_transaction: InitialState<ITransaction>;
  cancel_transaction: InitialState<ITransaction>;
};

export const transactionsRootReducer = combineReducers({
  create_transaction: createTransaction.slice.reducer,
  read_transactions: readTransactions.slice.reducer,
  approve_transaction: approveTransaction.slice.reducer,
  cancel_transaction: cancelTransaction.slice.reducer,
});
