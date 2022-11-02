import React from "react";
import { render } from "@testing-library/react";
import CurrencyInput from "./CurrencyInput";

describe("<CurrencyInput>", () => {
  const testid = "test-currency-input";
  const value = "123";

  it("Should output a currency input", () => {
    const { container } = render(<CurrencyInput data-testid={testid} />);

    expect(container).toBeInTheDocument();
  });

  it("Should have value", () => {
    const { getByTestId } = render(
      <CurrencyInput data-testid={testid} value={value} />
    );

    expect(getByTestId(testid)).toHaveAttribute("value", value);
  });
});
