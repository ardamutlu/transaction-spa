import React from "react";
import { isPending } from "@reduxjs/toolkit";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import CurrencyInput from "../../../components/CurrencyInput";
import Listbox from "../../../components/Listbox";
import { createTransaction } from "../../../store/user/transactions/createTransaction";
import { StoreState } from "../../../store/root";

type Props = {
  setSelectedIndex: (index: number) => void;
};

const OPTIONS = [
  {
    name: "Individual",
    value: "individual",
  },
  {
    name: "Business",
    value: "business",
  },
];

const CURRENCY = [
  {
    name: "USDC",
    value: "USDC",
  },
  {
    name: "TRY",
    value: "TRY",
  },
];

const schema = yup
  .object({
    sender_type: yup.string().required("This field is required"),
    sender_name: yup.string().required("This field is required"),
    beneficiary_name: yup.string().required("This field is required"),
    beneficiary_type: yup.string().required("This field is required"),
    currency: yup.string().required("This field is required"),
    sender_amount: yup.string().required(),
  })
  .required();

const TransactionForm: React.FC<Props> = ({ setSelectedIndex }) => {
  const dispatch = useDispatch();
  const { read_balance, create_transaction } = useSelector(
    ({ user }: StoreState) => ({
      read_balance: user.balance.read_balance,
      create_transaction: user.transactions.create_transaction,
    }),
    shallowEqual
  );
  const {
    register,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      sender_name: "",
      beneficiary_name: "",
      sender_amount: "",
      sender_type: OPTIONS[0].value,
      beneficiary_type: OPTIONS[0].value,
      currency: CURRENCY[0].value,
    },
  });

  const onChange = (name, option) => setValue(name, option.value);

  const onSubmit = (data) => {
    setSelectedIndex(1);
    if (
      parseFloat(data.sender_amount) > parseFloat(read_balance.sender_amount)
    ) {
      setError("sender_amount", {
        type: "custom",
        message: `Amount can not be greater than ${read_balance.sender_amount}`,
      });
    } else {
      dispatch(createTransaction(data)).then(() => {
        setSelectedIndex(1);
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group isValid={errors.sender_type?.message}>
        <Form.Label>Sender Type</Form.Label>
        <Listbox
          block
          options={OPTIONS}
          item={OPTIONS[0]}
          onChange={(value) => onChange("sender_type", value)}
        />
      </Form.Group>
      <Form.Group isValid={errors.sender_name?.message}>
        <Form.Input {...register("sender_name")} placeholder="Sender Name" />
      </Form.Group>
      <Form.Group isValid={errors.beneficiary_type?.message}>
        <Form.Label>Beneficiary Type</Form.Label>
        <Listbox
          block
          options={OPTIONS}
          item={OPTIONS[0]}
          onChange={(value) => onChange("beneficiary_type", value)}
        />
      </Form.Group>
      <Form.Group isValid={errors.beneficiary_name?.message}>
        <Form.Input
          {...register("beneficiary_name")}
          placeholder="Beneficiary Name"
        />
      </Form.Group>
      <Form.Group isValid={errors.currency?.message}>
        <Form.Label>Currency</Form.Label>
        <Listbox
          block
          options={CURRENCY}
          item={CURRENCY[0]}
          onChange={(value) => onChange("currency", value)}
        />
      </Form.Group>
      <Form.Group isValid={errors.sender_amount?.message}>
        <CurrencyInput
          onComplete={(value) => setValue("sender_amount", value)}
        />
      </Form.Group>
      <Button
        disabled={isPending(create_transaction) as any}
        type="submit"
        variant="dark"
        block
      >
        Send
      </Button>
    </Form>
  );
};

export default TransactionForm;
