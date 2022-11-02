import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioButton from "../RadioButton";

export default {
  title: "RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const True = Template.bind({});
True.args = {
  label: "색상 설정",
  value: "color",
  checked: true,
  disabled: false,
};

export const False = Template.bind({});
False.args = {
  label: "색상 설정",
  value: "color",
  checked: false,
  disabled: false,
};
