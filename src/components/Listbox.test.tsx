import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Listbox from "./Listbox";

describe("<Listbox>", () => {
  const text = "Listbox";
  const placeholder = "Select an item";
  const options = [
    {
      name: "Individual",
      value: "individual",
    },
    {
      name: "Business",
      value: "business",
    },
  ];

  it("Should output a dropdown", () => {
    const { container } = render(<Listbox options={options} />);
    expect(container).toBeInTheDocument();
  });

  it("Should output with placeholder", () => {
    const { getByText } = render(
      <Listbox options={options} placeholder={placeholder} />
    );
    expect(getByText(placeholder)).toBeInTheDocument();
  });

  it("Should output with block", () => {
    const { getByRole } = render(
      <Listbox options={options} placeholder={placeholder} block />
    );
    expect(getByRole("button")).toHaveClass("w-full");
  });

  it("Should list items", () => {
    const { getByRole, getByText } = render(
      <Listbox options={options} placeholder={placeholder} block />
    );
    fireEvent.click(getByRole("button"));
    expect(getByText(options[0].name)).toBeInTheDocument();
  });

  it("Should output default item", () => {
    const { getByText } = render(
      <Listbox options={options} item={options[0]} />
    );
    expect(getByText(options[0].name)).toBeInTheDocument();
  });

  it("Should output item name by selecting item", () => {
    const { getByRole, getByText } = render(<Listbox options={options} />);
    fireEvent.click(getByRole("button"));
    fireEvent.click(getByText(options[0].name));
    expect(getByText(options[0].name)).toBeInTheDocument();
  });

  it("Should onChange called", () => {
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <Listbox options={options} onChange={onChange} />
    );
    fireEvent.click(getByRole("button"));
    fireEvent.click(getByText(options[0].name));
    expect(onChange).toHaveBeenCalled();
  });
});
