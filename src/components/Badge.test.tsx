import React from "react";
import { render } from "@testing-library/react";
import Badge from "./Badge";

describe("<Badge>", () => {
  const text = "individual";
  const testid = "test-badge";

  it("Should output a badge", () => {
    const { container } = render(<Badge data-testid={testid}>{text}</Badge>);

    expect(container).toBeInTheDocument();
  });

  it('Should default to variant="primary"', () => {
    const { getByTestId } = render(
      <Badge data-testid={testid} variant="primary">
        {text}
      </Badge>
    );

    expect(getByTestId(testid)).toHaveClass("bg-blue-100 text-blue-800");
  });
});
