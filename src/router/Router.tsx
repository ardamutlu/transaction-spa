import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));
const Transactions = lazy(() => import("../pages/Transactions"));
const SendMoney = lazy(() => import("../pages/SendMoney"));

const Router: React.FC = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "transactions",
      element: (
        <ProtectedRoute>
          <Transactions />
        </ProtectedRoute>
      ),
    },
    {
      path: "send-money",
      element: (
        <ProtectedRoute>
          <SendMoney />
        </ProtectedRoute>
      ),
    },
  ]);

  return element;
};

export default Router;
