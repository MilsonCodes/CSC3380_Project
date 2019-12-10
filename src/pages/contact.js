import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lighten } from "polished";
import LinkComp from "../components/Link/index.js";
import Button from "../components/Button";


let Div = styled.div`

  max-width: 420px;
`
let P = styled.p `
    text-align: center;
    font-weight: 500;
`;

let Input = styled.input`
width: 95%;
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
let InputSubmit = styled.input `
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    :hover:background-color: #45a049;

`
let TextArea = styled.textarea`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
`
// .container {
//     border-radius: 5px;
//     background-color: #f2f2f2;
//     padding: 20px;
// }


const Contact = () => {
  const [showMessageSent, setShowMessageSent] = useState(false);
  return(
    <Div >
    <P>Contact Me</P>
    <div>

    <label>First Name</label>
    <Input type="text" id="fname" name="firstname" placeholder="Your name.." />
    <label>Last Name</label>
    <Input type="text" id="lname" name="lastname" placeholder="Your last name.." />


    <label>Email</label>
    <Input type="email" id="email" name="email" placeholder="Your email" />


    <label>Subject</label>
    <TextArea id="subject" name="subject" placeholder="Write something.."></TextArea>


    <Button size='medium' type='submit' onClick={() => setShowMessageSent( !state.showMessageSent )}>
      Submit
    </Button>
    <div>
      { state.showMessageSent &&
        <div>Thank you for contcting us.</div>
      }
    </div>


    </div>
    </Div>
  );
};

export default Contact;
