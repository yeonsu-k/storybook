import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "../Text";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const caption = Template.bind({});
caption.args = {
  value: "프리텐다드 caption 1rem",
  type: "caption",
  bold: false,
};

export const text = Template.bind({});
text.args = {
  value: "프리텐다드 text 1.125rem",
  type: "text",
  bold: false,
};

export const groupTitle = Template.bind({});
groupTitle.args = {
  value: "프리텐다드 groupTitle 1.25rem",
  type: "groupTitle",
  bold: false,
};

export const textTitle = Template.bind({});
textTitle.args = {
  value: "프리텐다드 textTitle 1.5rem",
  type: "textTitle",
  bold: false,
};

export const pageTitle = Template.bind({});
pageTitle.args = {
  value: "프리텐다드 pageTitle 2rem",
  type: "pageTitle",
  bold: false,
};

export const title = Template.bind({});
title.args = {
  value: "프리텐다드 title 2.5rem",
  type: "title",
  bold: false,
};
