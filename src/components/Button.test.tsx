import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("<Button>", () => {
  const text = "Button";
  const testid = "test-button";

  it("Should output a button", () => {
    const { container } = render(<Button data-testid={testid}>{text}</Button>);

    expect(container).toBeInTheDocument();
  });

  it('Should default to variant="primary"', () => {
    const className =
      "text-white bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-700";
    const { getByTestId } = render(
      <Button data-testid={testid}>{text}</Button>
    );

    expect(getByTestId(testid)).toHaveClass(className);
  });

  it('Should default to size="md"', () => {
    const className = "text-base px-5 py-3 rounded-lg";
    const { getByTestId } = render(
      <Button data-testid={testid}>{text}</Button>
    );

    expect(getByTestId(testid)).toHaveClass(className);
  });

  it('Should default to block="false"', () => {
    const className = "w-full";
    const { getByTestId } = render(
      <Button data-testid={testid}>{text}</Button>
    );

    expect(getByTestId(testid)).not.toHaveClass(className);
  });
});
