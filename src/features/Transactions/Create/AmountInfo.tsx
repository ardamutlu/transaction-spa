import React from "react";
import Alert from "../../../components/Alert";

type Props = {
  amount: string;
};

const AmountInfo: React.FC<Props> = ({ amount = 0 }) => {
  return (
    <Alert variant="primary">
      <div className="text-sm">Maximum amount that can be sent</div>
      <div className="font-bold">USD {amount}</div>
    </Alert>
  );
};

export default AmountInfo;
