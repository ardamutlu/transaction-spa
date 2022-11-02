import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert from "./Alert";

export default {
  title: "COMPONENTS/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

export const Default: ComponentStory<typeof Alert> = () => (
  <>
    <Alert variant="primary">This is a primary alert</Alert>
    <Alert variant="success">This is a success alert</Alert>
    <Alert variant="danger">This is a success alert</Alert>
    <Alert variant="warning">This is a primary alert</Alert>
    <Alert variant="info">This is a success alert</Alert>
  </>
);
