import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "../Modal";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const OneButtonModal = Template.bind({});
OneButtonModal.args = {
  text: "개설이 완료 됐습니다",
  buttonNum: 1,
  oneButtonLabel: "Button",
};

export const TwoButtonModal = Template.bind({});
TwoButtonModal.args = {
  text: `정말 해당 게시글을 삭제하시겠습니까?\n삭제한 게시물은 복구가 불가합니다.`,
  buttonNum: 2,
};
