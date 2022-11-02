import React from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Card from "../../../components/Card";
import Button from "../../../components/Button";

type Props = {
  setSelectedIndex: (payload: number) => void;
  status?: "success" | "error";
};

const Success: React.FC = () => (
  <>
    <CheckCircleIcon className="w-28 mx-auto text-green-600" />
    <div className="text-center mt-10 font-medium text-xl">
      Your transaction is queued!
    </div>
    <div className="text-center mt-5 text-sm text-gray-500">
      Your request is submitted and needs to be confirmed by other owners.
    </div>
  </>
);

const Error: React.FC<Pick<Props, "setSelectedIndex">> = ({
  setSelectedIndex,
}) => (
  <>
    <XCircleIcon className="w-28 mx-auto text-red-600" />
    <div className="text-center mt-10 font-medium text-xl">
      Your transaction failed!
    </div>
    <div className="text-center mt-5 text-sm text-gray-500">
      This is usually because of network congestion. Please try again.
    </div>
    <div className="text-center mt-5">
      <Button variant="dark" size="sm" onClick={() => setSelectedIndex(0)}>
        Try Again
      </Button>
    </div>
  </>
);

const Result: React.FC<Props> = ({ setSelectedIndex, status }) => {
  return (
    <Card className="max-w-xl mx-auto">
      <Card.Body>
        {status === "success" && <Success />}
        {status === "error" && <Error setSelectedIndex={setSelectedIndex} />}
      </Card.Body>
    </Card>
  );
};

export default Result;
