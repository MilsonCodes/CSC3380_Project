import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken } from "polished";

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
    background: ${p => darken(0.2, p.theme.button)};
    border: solid 2px ${props => darken(0.2, props.theme.secondary)};
`;

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

Button.propTypes = {
  /**
   * Icon to be displayed in the button
   */
  icon: PropTypes.element,
  /**
   * Label on the button
   */
  label: PropTypes.string,
  /**
   * The height of the button, can be percentage or number of pixels
   */
  height: PropTypes.string,
  /**
   * This is related to the width of the button
   */
  size: PropTypes.oneOf(["small", "medium", "large", null])
};

export default Button;
