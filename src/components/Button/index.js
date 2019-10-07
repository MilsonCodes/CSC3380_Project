import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 50px;
  border: ${props => "solid 2px " + props.theme.secondary};
  background: ${props => props.theme.button};
  color: ${props => props.theme.text | "black"};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props =>
    props.size === "small"
      ? props.height
        ? props.height
        : "45px"
      : props.size === "medium"
      ? "100px"
      : props.size === "large"
      ? "200px"
      : "15%"};
  outline: none;
  transition: all ease 0.25s;
  cursor: pointer;
  margin: 10px;
  display: ${props => (props.icon && !props.label ? "flex" : "block")};
  font-size: ${p => (p.icon && !p.label ? "35px" : "15px")};
  :hover {
    background: ${props => props.theme.secondary};
  border: solid 3px ${p => p.theme.button};
`;

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
