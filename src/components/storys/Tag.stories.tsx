import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tag from "../Tag";

export default {
  title: "Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Chip = Template.bind({});
Chip.args = {
  label: "React",
};
