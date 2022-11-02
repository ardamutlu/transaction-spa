import React from "react";
import { isFulfilled } from "@reduxjs/toolkit";
import { shallowEqual, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  redirectPath?: string;
  children: React.ReactElement;
};

const ProtectedRoute: React.FC<Props> = ({ redirectPath = "/", children }) => {
  const { login } = useSelector(
    ({ auth }) => ({ login: auth.login }),
    shallowEqual
  );

  if (!isFulfilled(login)) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
