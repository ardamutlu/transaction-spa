import classNames from "classnames";
import React, { forwardRef } from "react";

type Props = {
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>;
type Ref = HTMLElement;

const Card = forwardRef<Ref, Props>(
  ({ as: Component = "div", className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={classNames("bg-white shadow sm:rounded-lg", className)}
        {...props}
      />
    );
  }
);

const Header = forwardRef<Ref, Props>(
  ({ as: Component = "div", className, ...props }, ref) => (
    <Component
      ref={ref}
      className={classNames("px-4 py-5 sm:px-6", className)}
      {...props}
    />
  )
);

const Title = forwardRef<Ref, Props>(
  ({ as: Component = "h3", className, ...props }, ref) => (
    <Component
      ref={ref}
      className={classNames(
        "text-lg font-medium leading-6 text-gray-900",
        className
      )}
      {...props}
    />
  )
);

const Text = forwardRef<Ref, Props>(
  ({ as: Component = "p", className, ...props }, ref) => (
    <Component
      ref={ref}
      className={classNames("mt-1 max-w-2xl text-sm text-gray-500", className)}
      {...props}
    />
  )
);

const Body = forwardRef<Ref, Props>(
  ({ as: Component = "div", className, ...props }, ref) => (
    <Component
      ref={ref}
      className={classNames(
        "border-t border-gray-200 px-4 py-5 sm:px-6",
        className
      )}
      {...props}
    />
  )
);

export default Object.assign(Card, { Header, Body, Title, Text });
