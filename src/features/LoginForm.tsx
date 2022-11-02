import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { isPending } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { login as loginAction } from "../store/auth/login";
import Button from "../components/Button";
import Form from "../components/Form";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { login } = useSelector(
    ({ auth }: any) => ({ login: auth.login }),
    shallowEqual
  );
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "test008@example.com",
      password: "123456",
    },
  });

  const onSubmit = (data) => dispatch(loginAction(data));

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6 ">
          <div className="-space-y-px rounded-md shadow-sm">
            <Form.Group>
              <Form.Input
                {...register("email")}
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                {...register("password")}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </div>

          <Button
            disabled={isPending(login) as any}
            type="submit"
            block
            className="relative"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
