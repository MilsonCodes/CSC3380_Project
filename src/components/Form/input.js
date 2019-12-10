import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lighten } from "polished";

let StyledInput = styled.input`
  width: ${p => p.size || "95%"};
  border-radius: 30px;
  border: none;
  box-shadow: 0 0 10px 0 ${p => lighten(0.2, p.theme.secondary)};
  min-height: ${p => p.height};
  background-color: ${p => p.color};
  margin: 5px;
  padding: 5px;
  outline: none;
  transition: all ease 0.5s;
  font-family: "Montserrat", sans-serif;
  &::placeholder {
    opacity: 0.4;
    input:focus ~ &,
    &.filled {
      display: none;
    }
  }
`;

const Input = props => {
  return <StyledInput {...props}>{props.children}</StyledInput>;
};

export default Input;
