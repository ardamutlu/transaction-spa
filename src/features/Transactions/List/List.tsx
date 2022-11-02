import React, { useEffect, useState } from "react";
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import dayjs from "dayjs";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import truncate from "lodash/truncate";
import get from "lodash/get";
import {
  ArrowLongRightIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import Table from "../../../components/Table";
import Dropdown from "../../../components/Dropdown";
import Badge from "../../../components/Badge";
import useCopyToClipboard from "../../../hooks/useCopyToClipboard";
import Card from "../../../components/Card";
import TransactionFilter from "./Filter";
import { ITransaction } from "../../../store/user/transactions/root";
import { StoreState } from "../../../store/root";
import ContentLoader from "../../../components/ContentLoader";
import { readTransactions } from "../../../store/user/transactions/readTransactions";
import { approveTransaction } from "../../../store/user/transactions/approveTransaction";
import { cancelTransaction } from "../../../store/user/transactions/cancelTransaction";

const ACTIONS = [{ name: "Approve" }, { name: "Cancel" }];

type Transaction = ITransaction & { action?: unknown; transaction?: unknown };

const columnHelper = createColumnHelper<Transaction>();

const columns = [
  columnHelper.accessor("_id", {
    header: () => "IDs",
    cell: (info) => {
      const [, copy] = useCopyToClipboard();
      return (
        <div className="flex">
          <div className="mr-1 text-xs">
            {truncate(info.getValue(), {
              length: 13,
              separator: "...",
            })}
          </div>
          <ClipboardDocumentIcon
            className="text-green-500 hover:text-green-600 active:text-green-500 w-4 cursor-pointer"
            onClick={() => copy(info.getValue())}
          />
        </div>
      );
    },
  }),
  columnHelper.accessor("transaction", {
    header: () => "Transaction",
    cell: (info) => {
      const {
        sender_name,
        sender_type,
        sender_amount,
        beneficiary_amount,
        currency,
        rate,
        commission,
        beneficiary_name,
        beneficiary_type,
      } = info.row.original;

      return (
        <>
          <div className="flex justify-center text-xs">
            <div className="mr-2">
              <span className="mr-1">{sender_name}</span>
              <Badge
                variant={sender_type === "individual" ? "primary" : "warning"}
              >
                {sender_type}
              </Badge>
            </div>
            <ArrowLongRightIcon className="text-gray-800 w-4" />
            <div className="ml-2">
              <span className="mr-1">{beneficiary_name}</span>
              <Badge
                variant={
                  beneficiary_type === "individual" ? "primary" : "warning"
                }
              >
                {beneficiary_type}
              </Badge>
            </div>
          </div>
          <div className="flex justify-center text-xs">
            <span className="mr-1">
              {sender_amount} {currency}
            </span>
            <ArrowLongRightIcon className="text-gray-800 w-4" />
            <span className="mx-1">
              {commission} {currency}
            </span>
            <ArrowLongRightIcon className="text-gray-800 w-4" />
            <span className="ml-1">
              {beneficiary_amount} {currency}
            </span>
          </div>
          <div className="flex justify-center text-xs">
            <span className="mr-1">
              1 {currency} = {rate}
            </span>
          </div>
        </>
      );
    },
  }),
  columnHelper.accessor("status", {
    header: () => "Tx Status",
    cell: (info) => <div className="text-xs">{info.renderValue()}</div>,
  }),
  columnHelper.accessor("creation_date", {
    header: () => "Dates",
    cell: ({ row }) => {
      const { creation_date, completion_date } = row.original;
      return (
        <>
          <div className="text-xs">
            {dayjs(creation_date).format("DD/MM/YY hh:mm")}
          </div>
          <div className="text-xs">
            {completion_date
              ? dayjs(completion_date).format("DD/MM/YY hh:mm")
              : null}
          </div>
        </>
      );
    },
  }),
  columnHelper.accessor("action", {
    header: "",
    cell: ({ row }) => {
      const dispatch = useDispatch();
      const { _id, status } = row.original;
      return (
        status === "created" && (
          <div className="text-right">
            <Dropdown
              text="Actions"
              items={ACTIONS}
              onClick={(index, item) => {
                if (index === 0) {
                  dispatch(approveTransaction(_id)).then(() =>
                    dispatch(readTransactions())
                  );
                } else {
                  dispatch(cancelTransaction(_id)).then(() =>
                    dispatch(readTransactions())
                  );
                }
              }}
            />
          </div>
        )
      );
    },
  }),
];

const TransactionTable: React.FC = () => {
  const dispatch = useDispatch();
  const { read_transactions, approve_transaction, cancel_transaction } =
    useSelector(
      ({ user }: StoreState) => ({
        read_transactions: user.transactions.read_transactions,
        approve_transaction: user.transactions.approve_transaction,
        cancel_transaction: user.transactions.cancel_transaction,
      }),
      shallowEqual
    );
  const [globalFilter, setGlobalFilter] = useState("");

  const tableInstance = useReactTable({
    data: get(read_transactions, "payload", []),
    columns,
    state: { globalFilter },
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
  });

  useEffect(() => {
    dispatch(readTransactions());
  }, []);

  return (
    <Card>
      <ContentLoader
        payload={[read_transactions, approve_transaction, cancel_transaction]}
      >
        <Card.Header>
          <Card.Title>Transactions</Card.Title>
          <Card.Text>
            There are {get(read_transactions, "payload", 0).length} transactions
            in total.
          </Card.Text>
        </Card.Header>
        <TransactionFilter
          data={tableInstance.getFilteredRowModel().rows}
          setGlobalFilter={setGlobalFilter}
        />
        <Table tableInstance={tableInstance} />
      </ContentLoader>
    </Card>
  );
};

export default TransactionTable;
