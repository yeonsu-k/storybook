import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../ButtonStyled";
import { Check } from "@mui/icons-material";

export default {
  title: "common/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  label: "Button",
  color: "blue",
  width: "200px"
};

export const Sky = Template.bind({});
Sky.args = {
  label: "Button",
  color: "sky",
};

export const Icon = Template.bind({});
Icon.args = {
  label: "success",
  color: "blue",
  icon: <Check />,
};
