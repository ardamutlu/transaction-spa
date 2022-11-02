import classNames from "classnames";
import React, { forwardRef } from "react";

type Props = {
  variant?: "primary" | "dark";
  size?: "sm" | "md";
  type?: "submit" | "button";
  block?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;
type Ref = HTMLButtonElement;

const VARIANTS = {
  primary: "text-white bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-700",
  dark: "text-white bg-gray-800 hover:bg-gray-900 active:bg-gray-800",
};

const SIZES = {
  sm: "text-sm px-4 py-2 rounded-md",
  md: "text-base px-5 py-3 rounded-lg",
};

const Button = forwardRef<Ref, Props>(
  (
    { variant = "primary", size = "md", block = false, className, ...props },
    ref
  ) => (
    <button
      ref={ref}
      className={classNames(
        "focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
        className,
        VARIANTS[variant],
        SIZES[size],
        {
          "w-full": block,
        }
      )}
      {...props}
    />
  )
);

export default Button;
