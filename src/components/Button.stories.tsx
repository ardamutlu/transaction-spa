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
import Button from "./Button";

export default {
  title: "COMPONENTS/Button",
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>
            Use any of the available button style types to quickly create a
            styled button. Just modify the variant prop.
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

export const Default: ComponentStory<typeof Button> = () => (
  <>
    <Button variant="dark" size="sm">
      Dark
    </Button>
    <Button variant="primary" size="sm">
      Primary
    </Button>
    <Button variant="dark" size="md" block>
      Dark
    </Button>
  </>
);
