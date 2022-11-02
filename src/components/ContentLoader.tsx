import React from "react";
import { isPending, isRejected } from "@reduxjs/toolkit";
import map from "lodash/map";
import filter from "lodash/filter";
import some from "lodash/some";
import isArray from "lodash/isArray";
import Alert from "./Alert";

type Props = {
  children: React.ReactNode;
  payload: Array<unknown>;
};

const ContentLoader: React.FC<Props> = ({ children, payload }) => {
  if (isArray(payload)) {
    const PENDING = some(payload, (_) => isPending(_));
    if (PENDING) return <div className="text-center p-5">Loading</div>;
  }

  if (isArray(payload)) {
    const REJECTED = some(payload, (_) => isRejected(_));
    if (REJECTED)
      return (
        <Alert variant="danger">
          <ul role="list" className="list-disc ml-4">
            {map(
              filter(payload, (_) => isRejected(_)),
              (_, index) => (
                <li key={index}>{_.payload}</li>
              )
            )}
          </ul>
        </Alert>
      );
  }

  return <>{children}</>;
};

export default ContentLoader;
