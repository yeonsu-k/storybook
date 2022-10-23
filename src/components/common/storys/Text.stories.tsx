import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "../Text";

export default {
  title: "Test/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

const STORY_TEXT = "I love Storybook!";

export const Primary = Template.bind({});
Primary.args = {
  italic: true,
  underline: true,
  children: STORY_TEXT,
};