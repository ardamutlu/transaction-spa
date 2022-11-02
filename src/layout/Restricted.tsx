import { isFulfilled } from "@reduxjs/toolkit";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";

type Props = {
  children: React.ReactElement;
};

const Restricted: React.FC<Props> = ({ children }) => {
  const { login } = useSelector(
    ({ auth }) => ({ login: auth.login }),
    shallowEqual
  );

  if (!isFulfilled(login)) return null;

  return children;
};

export default Restricted;
