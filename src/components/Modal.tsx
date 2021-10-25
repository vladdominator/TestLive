import React from "react";
import { CSSTransition } from "react-transition-group";
import { ISources } from "../App";
import "antd/dist/antd.css";
import { overflowOff, overflowOn } from "../common/modalOverflow";
import { Form, Input, Button, Checkbox } from "antd";

import "../Modal.scss";
interface IModal {
  isVisible: boolean;
  setVisible(modal: boolean): void;
  setSources(source: (prev: ISources[]) => ISources[]): void;
}
const Modal: React.FC<IModal> = ({ isVisible, setVisible, setSources }) => {
  const [form] = Form.useForm();

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      setSources((prev: ISources[]) => [
        ...prev,
        {
          firstName: values.username,
          lastName: values.nickname,
          id: String(Date.now()),
        },
      ]);
      setVisible(false);
    } catch (errorInfo) {
      console.error("Failed:", errorInfo);
    }
  };

  return (
    <CSSTransition
      in={isVisible}
      timeout={600}
      classNames="modal"
      unmountOnExit
      onEnter={overflowOn}
    >
      <div
        className="modal-dev"
        onClick={() => {
          setVisible(false);
          overflowOff();
        }}
      >
        <div
          className="modal__content"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <div
            className="close__modal"
            onClick={() => {
              setVisible(false);
              overflowOff();
            }}
          >
            X
          </div>
          <Form form={form} name="dynamic_rule">
            <Form.Item
              name="username"
              label="First Name"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input placeholder="Please input your name" />
            </Form.Item>
            <Form.Item
              name="nickname"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: "Please input your nickname",
                },
              ]}
            >
              <Input placeholder="Please input your nickname" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={onCheck}>
                Check
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </CSSTransition>
  );
};

export { Modal };
