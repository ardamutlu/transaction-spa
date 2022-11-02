import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";
import Card from "./Card";

export default {
  title: "COMPONENTS/Card",
  component: Card,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>
            Cards provide a flexible and extensible content container with
            multiple variants and options.
          </Subtitle>
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta;

export const Default: ComponentStory<typeof Card> = () => (
  <>
    <Card>
      <Card.Header>
        <Card.Title>Lorem Ipsum</Card.Title>
        <Card.Text>
          Lorem ipsum is placeholder text commonly used in the graphic
        </Card.Text>
      </Card.Header>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Card.Body>
    </Card>
  </>
);
