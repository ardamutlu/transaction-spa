import React from "react";
import { render } from "@testing-library/react";
import Form, { INPUT_SIZES, INPUT_VARIANTS } from "./Form";

describe("<Form>", () => {
  it("Should output Form", () => {
    const { container } = render(<Form />);
    expect(container).toBeInTheDocument();
  });

  it("Should output Form.Group with an error message", () => {
    const message = "Error message";
    const { getByText } = render(<Form.Group isValid={message} />);
    expect(getByText(message)).toBeInTheDocument();
  });

  it("Should output Form.Label", () => {
    const { container } = render(<Form.Label />);
    expect(container).toBeInTheDocument();
  });

  it('Should output Form.Input with default variant="primary" and size="md"', () => {
    const testid = "test-input";
    const variant = "indigo";
    const size = "md";
    const { getByTestId } = render(<Form.Input data-testid={testid} />);
    expect(getByTestId(testid)).toHaveClass(
      INPUT_VARIANTS[variant],
      INPUT_SIZES[size]
    );
  });
});
