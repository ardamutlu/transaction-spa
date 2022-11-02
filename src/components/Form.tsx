import React, { forwardRef } from "react";
import classNames from "classnames";

type Props = React.HTMLAttributes<HTMLElement>;

const Form = forwardRef<HTMLFormElement, Props>(
  ({ className, ...props }, ref) => (
    <form ref={ref} className={classNames(className)} {...props} />
  )
);

const Group = forwardRef<
  HTMLDivElement,
  Props & { isValid?: string | undefined }
>(({ children, className, isValid, ...props }, ref) => (
  <div ref={ref} className={classNames("mb-3", className)} {...props}>
    {children}
    {isValid && <div className="text-xs text-red-500 mt-1">{isValid}</div>}
  </div>
));

const Label = forwardRef<HTMLLabelElement, Props>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={classNames("mb-3 text-sm text-gray-600", className)}
      {...props}
    />
  )
);

export const INPUT_VARIANTS = {
  indigo: "focus:border-indigo-500 focus:ring-indigo-500",
  secondary: "focus:border-slate-500 focus:ring-slate-500",
};

export const INPUT_SIZES = {
  sm: "px-2 py-2",
  md: "px-3 py-3",
  lg: "px-4 py-4",
};

const Input = forwardRef<
  HTMLInputElement,
  {
    variant?: "indigo" | "secondary";
    size?: "sm" | "md" | "lg";
  } & React.HTMLProps<HTMLInputElement>
>(({ className, size = "md", variant = "indigo", ...props }, ref) => (
  <input
    ref={ref}
    className={classNames(
      "block w-full shadow-sm rounded-md border border-gray-200 text-sm",
      className,
      INPUT_VARIANTS[variant],
      INPUT_SIZES[size]
    )}
    {...props}
  />
));

export default Object.assign(Form, { Group, Label, Input });
