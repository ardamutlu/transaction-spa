import React, { forwardRef } from "react";
import classNames from "classnames";

type Props = {
  variant?: "primary" | "success" | "danger" | "warning" | "info" | "dark";
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>;
type Ref = HTMLDivElement;

const VARIANTS = {
  primary: "bg-slate-100 text-slate-800",
  success: "bg-green-100 text-green-800",
  danger: "bg-red-100 text-red-800",
  warning: "bg-yellow-100 text-yellow-800",
  info: "bg-blue-100 text-blue-800",
  dark: "bg-slate-800 text-slate-50",
};

const Alert = forwardRef<Ref, Props>(
  (
    { as: Component = "div", className, variant = "primary", ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={classNames(
        "shadow rounded-md py-3 px-5 mb-3",
        className,
        VARIANTS[variant]
      )}
      role="alert"
      {...props}
    />
  )
);

export default Alert;
