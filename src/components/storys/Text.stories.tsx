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
};

export const text = Template.bind({});
text.args = {
  value: "프리텐다드 text 1.125rem",
  type: "text",
};

export const groupTitle = Template.bind({});
groupTitle.args = {
  value: "프리텐다드 groupTitle 1.25rem",
  type: "groupTitle",
};

export const groupTitleBold = Template.bind({});
groupTitleBold.args = {
  value: "프리텐다드 groupTitleBold 1.25rem",
  type: "groupTitleBold",
};

export const textTitle = Template.bind({});
textTitle.args = {
  value: "프리텐다드 textTitle 1.5rem",
  type: "textTitle",
};

export const textTitleBold = Template.bind({});
textTitleBold.args = {
  value: "프리텐다드 textTitleBold 1.5rem Bold",
  type: "textTitleBold",
};

export const pageTitle = Template.bind({});
pageTitle.args = {
  value: "프리텐다드 pageTitle 2rem",
  type: "pageTitle",
};

export const pageTitleBold = Template.bind({});
pageTitleBold.args = {
  value: "프리텐다드 pageTitleBold 2rem",
  type: "pageTitleBold",
};

export const title = Template.bind({});
title.args = {
  value: "프리텐다드 title 2.5rem",
  type: "title",
};

export const titleBold = Template.bind({});
titleBold.args = {
  value: "프리텐다드 titleBold 2.5rem",
  type: "titleBold",
};
