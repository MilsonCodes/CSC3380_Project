import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

//TODO: CSS this checkbox
let StyledCheckbox = styled.input`
    
`;

//TODO: CSS this label
let Label = styled.label`

`;

const Checkbox = props => {
    return (
        <Label>
            <StyledCheckbox type="checkbox" {...props}>{props.children}</StyledCheckbox>
            {props.label}
        </Label>
    );
}

export default Checkbox;