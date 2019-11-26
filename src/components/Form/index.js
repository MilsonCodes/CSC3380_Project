import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "../Button";
import Input from "./input";
import Checkbox from "./checkbox";
import LinkComp from '../Link';

const Forms = {};

//TODO: Adjust div for form
let FormDiv = styled.div`
width: 25%;
margin: 0 auto;
`;

let Form = styled.form`
border: none;
span {
  float: right;
}
`;

/**
 * TODO:
 *  - Adjust CSS
 *  - Make password change based on criteria
 *  - Validate and handle login data
 */
Forms.LoginForm = props => {
    const [showPassword, setShowPassword] = useState('');

    function onFormChange(event) {

    }

    function handleSubmit(event) {

    }

    return (
        <FormDiv>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="username" placeholder="Username"/>
                <Input type={showPassword ? "text" : "password"} name="password" placeholder="Password" onchange={onFormChange}/>
                <Checkbox name="showPassword" label="Show Password" onChange={e => setShowPassword(e.target.checked)}/>
                <br/>
                <span>
                    <Button size='medium' type='submit'>
                        Login
                    </Button>
                </span>
            </Form>
            <br/>
            <LinkComp to="/register">
			    <p>Register Here</p>
		    </LinkComp>
        </FormDiv>
    );
}

/**
 * TODO:
 *  - Adjust CSS
 *  - Make password change based on criteria
 *  - Validate and handle registration data
 */
Forms.RegisterForm = props => {
    const [showPassword, setShowPassword] = useState('');

    function onFormChange(event) {

    }

    function handleSubmit(event) {

    }

    return (
        <FormDiv>
            <h2>Register</h2>
            <Form onSubmit={handleSubmit}>
                <h3>Personal Info</h3>
                <Input type="text" name="name" placeholder="Name"/>
                <Input type="text" name="email" placeholder="E-Mail"/>
                <h3>User Info</h3>
                <Input type="text" name="username" placeholder="Username"/>
                <Input type={showPassword ? "text" : "password"} name="password" placeholder="Password" onchange={onFormChange}/>
                <Input type={showPassword ? "text" : "password"} name="confpassword" placeholder="Confirm Password" onchange={onFormChange}/>
                <Checkbox name="showPassword" label="Show Password" onChange={e => setShowPassword(e.target.checked)}/>
                <br/>
                <span>
                    <Button size='medium' type='submit'>
                        Register
                    </Button>
                </span>
            </Form>
            <br/>
            <LinkComp to="/login">
			    <p>Login Here</p>
		    </LinkComp>
        </FormDiv>
    );
}

export default Forms;