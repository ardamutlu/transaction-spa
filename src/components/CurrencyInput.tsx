import React, { useEffect } from "react";
import { useIMask } from "react-imask";
import Form from "./Form";

type Props = {
  value?: string;
  onComplete?: (value: string) => void;
  "data-testid"?: string;
};

const defaultMaskOptions = {
  mask: Number,
  radix: ".",
  scale: "2",
  thousandsSeparator: ".",
  min: "0",
  unmask: true,
};

const CurrencyInput: React.FC<Props> = (props) => {
  const { ref, value, setValue } = useIMask(defaultMaskOptions, {
    onComplete: (value) => props.onComplete && props.onComplete(value),
  });

  useEffect(() => {
    setValue(props?.value || "");
  }, [props]);

  return (
    <Form.Input
      ref={ref}
      defaultValue={value}
      data-testid={props["data-testid"]}
    />
  );
};

export default CurrencyInput;
