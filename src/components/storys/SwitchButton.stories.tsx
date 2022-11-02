import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SwitchButton from "../SwitchButton";

export default {
  title: "SwitchButton",
  component: SwitchButton,
} as ComponentMeta<typeof SwitchButton>;

const Template: ComponentStory<typeof SwitchButton> = (args) => (
  <SwitchButton {...args} />
);

export const On = Template.bind({});
On.args = {
  label: "블로그 로고",
  name: "logo",
  checked: true,
};

export const Off = Template.bind({});
Off.args = {
  label: "프로필",
  name: "logo",
  checked: false,
};
