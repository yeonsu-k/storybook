import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SwitchButton from "../BSwitchButton";

export default {
  title: "common",
  component: SwitchButton,
} as ComponentMeta<typeof SwitchButton>;

const Template: ComponentStory<typeof SwitchButton> = (args) => (
  <SwitchButton {...args} />
);

export const SwitchButton2 = Template.bind({});
SwitchButton2.args = {
  label: "블로그 로고",
  location: "left",
  onClick: undefined,
};
