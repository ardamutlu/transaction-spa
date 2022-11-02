import React, { forwardRef } from "react";
import classNames from "classnames";

type Props = {
  variant?: "primary" | "warning" | "success" | "danger";
} & React.HTMLAttributes<HTMLElement>;
type Ref = HTMLElement;

const VARIANTS = {
  primary: "bg-blue-100 text-blue-800",
  warning: "bg-yellow-100 text-yellow-800",
  success: "bg-green-100 text-green-800",
  danger: "bg-red-100 text-red-800",
};

const Badge = forwardRef<Ref, Props>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={classNames(
          "text-xs px-2.5 py-0.5 rounded",
          className,
          VARIANTS[variant]
        )}
        {...props}
      />
    );
  }
);

export default Badge;
