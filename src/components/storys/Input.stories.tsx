import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../Input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const BaseInput = Template.bind({});
BaseInput.args = {
  name: "base-input",
  placeholder: "input 설명이 들어갑니다",
};

export const TextField = Template.bind({});
TextField.args = {
  name: "TextField",
  placeholder: "TextField Test",
  type: "date",
  multiline: true,
  rows: 10,
  size: "small",
};

export const Date = Template.bind({});
Date.args = {
  name: "Date",
  type: "date",
  textBool: true,
  helperText: "날짜 입력 받기",
};

export const Email = Template.bind({});
Date.args = {
  name: "Date",
  type: "Email",
  textBool: true,
  helperText: "이메일 입력 받기",
};

export const Color = Template.bind({});
Color.args = {
  name: "Color",
  placeholder: "input 설명",
  type: "color",
  textBool: true,
  helperText: "컬러 설정",
};
