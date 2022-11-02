import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("<Card>", () => {
  const testid = "test-card";

  it("Should output a card", () => {
    const { container } = render(
      <Card data-testid={testid}>
        <Card.Header>
          <Card.Title>Title</Card.Title>
          <Card.Text>Text</Card.Text>
        </Card.Header>
        <Card.Body>Body</Card.Body>
      </Card>
    );

    expect(container).toBeInTheDocument();
  });
});
