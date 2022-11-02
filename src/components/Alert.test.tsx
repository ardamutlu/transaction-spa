import React from "react";
import { render } from "@testing-library/react";
import Alert from "./Alert";

describe("<Alert>", () => {
  const text = "Message";
  const testid = "test-alert";

  it("Should output a alert with message", () => {
    const { getByTestId } = render(
      <Alert data-testid={testid}>
        <div>{text}</div>
      </Alert>
    );

    expect(getByTestId(testid)).toBeInTheDocument();
    expect(getByTestId(testid).children[0].tagName.toLowerCase()).toEqual(
      "div"
    );
  });

  it('Should default to variant="primary"', () => {
    const { getByTestId } = render(
      <Alert data-testid={testid} variant="primary">
        <div>{text}</div>
      </Alert>
    );

    expect(getByTestId(testid)).toHaveClass("bg-slate-100 text-slate-800");
  });
});
