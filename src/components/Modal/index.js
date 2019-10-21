import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { FiX } from "react-icons/fi";
import LinkComp from "../Link";

const ModalDiv = styled.div`
  position: fixed;
  transition: all 2s ease-in-out;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
  display: ${props => (props.open ? "block" : "none")};
  :close_modal {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    font-size: 18px;
    opacity: 0.5;
    background: none;
    border: none;
    transition: opacity 0.2s ease;
  }
  :close_modal:hover {
    opacity: 0.9;
  }
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 995;
  background: rgba(0, 0, 0, 0.85);
`;
const Content = styled.div`
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  overflow: auto;
  background: #fff;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  width: 50%;
  overflow: hidden;
  display: block;
  span {
    float: right;
  }
`;

const Modal = props => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div>
      <LinkComp {...props} onClick={() => setOpen(true)}>
        {props.children}
      </LinkComp>
      <ModalDiv open={isOpen}>
        <Overlay onClick={() => setOpen(false)} />
        <Content>
          <span>
            <Button size='small' onClick={() => setOpen(false)}>
              <FiX />
            </Button>
          </span>
          {props.element}
        </Content>
      </ModalDiv>
    </div>
  );
};
export default Modal;
