import React, { useState } from "react";
import { useCookies } from "react-cookie";
import styled, { ThemeProvider } from "styled-components";
import Button from "../Button";
import Input from "./input";
import Checkbox from "./checkbox";
import LinkComp from "../Link";
import Router from "next/router";

const Forms = {};
const URL = "http://localhost:4040/api/"; //Likely to change this to a different location. For testing purposes only of course

let FormDiv = styled.div`
  width: 25%;
  margin: 0 auto;
  padding-bottom: 100px;
`;

let Form = styled.form`
  border: none;
  span {
    float: right;
  }
`;

let ErrorDiv = styled.div`
  padding: 20px;
  background-color: #f44336; /* Red */
  color: white;
  margin-bottom: 15px;
  border-radius: 25px;
`;

const ErrorBar = props => {
  return (
    <ErrorDiv>
      <strong>Error!</strong> {props.message}
    </ErrorDiv>
  );
};

Forms.LoginForm = props => {
  const [showPassword, setShowPassword] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["login-token"]);
  const [error, setError] = useState({ err: false, errMsg: "" });

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch(`${URL}users/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(resJSON => {
        setCookie("login-token", resJSON.login_token, { path: "/" });

        props.history.push("/home");
      })
      .catch(err => {
        console.log(err);
        setError(prevErr => ({
          err: true,
          errMsg: err.message
            ? err.message
            : "An unspecified error has been encountered!"
        })); //Need routes working to test this
      });
  }

  return (
    <FormDiv>
      {error.err ? <ErrorBar message={error.errMsg} /> : null}
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Input type='text' name='username' placeholder='Username' />
        <Input
          type={showPassword ? "text" : "password"}
          name='password'
          placeholder='Password'
        />
        <Checkbox
          name='showPassword'
          label='Show Password'
          onChange={e => setShowPassword(e.target.checked)}
        />
        <br />
        <span>
          <Button size='medium' type='submit'>
            Login
          </Button>
        </span>
      </Form>
      <br />
      <LinkComp to='/register'>
        <p>Register Here</p>
      </LinkComp>
    </FormDiv>
  );
};

/**
 * TODO:
 *  - Adjust CSS
 *  - Validate and handle registration data
 */
Forms.RegisterForm = props => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailCriteria, setEmailCriteria] = useState(true);
  const [passCriteria, setPassCriteria] = useState(true);
  const [mainPass, setMainPassword] = useState("");
  const [confPass, setConfirmPassword] = useState("");
  const [ownRestaurant, setOwnRestaurant] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["login-token"]);
  const [error, setError] = useState({ err: false, errMsg: "" });

  const onPasswordChange = e => {
    setMainPassword(e.target.value);

    setPassCriteria(mainPass === confPass && mainPass.length >= 8);
  };

  const onConfPasswordChange = e => {
    setConfirmPassword(e.target.value);

    setPassCriteria(mainPass === confPass && mainPass.length >= 8);
  };

  let handleSubmit = (event, props) => {
    event.preventDefault();
    const data = new FormData(event.target);
    props.onSubmit(data);
    // Router.push("/home");
    // if (emailCriteria && passCriteria) {
    //   fetch(`${URL}/users`, {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(data)
    //   })
    //     .then(res => res.json())
    //     .then(resJSON => {
    //       setCookie("login-token", resJSON.login_token, { path: "/" });

    //       props.history.push("/home");
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       setError(prevErr => ({
    //         err: true,
    //         errMsg: err.message
    //           ? err.message
    //           : "An unspecified error has been encountered!"
    //       }));
    //     });
    // }
  };

  return (
    <FormDiv>
      {error.err ? <ErrorBar message={error.errMsg} /> : null}
      <h2>Register</h2>
      <Form onSubmit={handleSubmit} {...props}>
        <h3>Restaurant</h3>
        <Checkbox
          name='ownRestaurant'
          label='Do you own a Restaurant?'
          onChange={e => setOwnRestaurant(e.target.checked)}
        />
        <br />
        <h3>{ownRestaurant ? "Business" : "Personal"} Info</h3>
        <Input
          type='text'
          name='name'
          placeholder={ownRestaurant ? "Restaurant Name" : "Name"}
        />
        <Input
          type='text'
          name='email'
          placeholder='E-Mail'
          color={emailCriteria ? "white" : "lightcoral"}
          onChange={e =>
            setEmailCriteria(
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                e.target.value
              )
            )
          }
        />
        <br />
        <h3>User Info</h3>
        <Input type='text' name='username' placeholder='Username' />
        <Input
          type={showPassword ? "text" : "password"}
          name='password'
          placeholder='Password'
          color={passCriteria ? "white" : "lightcoral"}
          onBlur={onPasswordChange}
        />
        <Input
          type={showPassword ? "text" : "password"}
          name='confpassword'
          placeholder='Confirm Password'
          color={passCriteria ? "white" : "lightcoral"}
          onBlur={onConfPasswordChange}
        />
        <Checkbox
          name='showPassword'
          label='Show Password'
          onChange={e => setShowPassword(e.target.checked)}
        />
        <br />
        <h3>Location</h3>
        <Input
          type='text'
          name='zipcode'
          placeholder='Zip Code'
          pattern='[0-9]*'
        />
        <br />
        <span>
          <Button size='medium' type='submit'>
            Register
          </Button>
        </span>
      </Form>
      <br />
      <LinkComp to='/login'>
        <p>Login Here</p>
      </LinkComp>
    </FormDiv>
  );
};

export default Forms;
