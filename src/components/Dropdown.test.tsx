import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("<Dropdown>", () => {
  const text = "Dropdown";
  const options = [{ name: "Action-1" }, { name: "Action-2" }];

  it("Should output a dropdown", () => {
    const { container } = render(<Dropdown items={options} text={text} />);
    expect(container).toBeInTheDocument();
  });

  it("Should output a list on click dropdown", () => {
    const { getByText } = render(<Dropdown items={options} text={text} />);
    fireEvent.click(getByText(text));
    expect(getByText("Action-1")).toBeInTheDocument();
  });

  it("Should button click have been called", () => {
    const callbackFunc = jest.fn();
    const { getByText } = render(
      <Dropdown items={options} text={text} onClick={callbackFunc} />
    );
    fireEvent.click(getByText(text));
    fireEvent.click(getByText("Action-1"));
    expect(callbackFunc).toHaveBeenCalled();
  });
});
