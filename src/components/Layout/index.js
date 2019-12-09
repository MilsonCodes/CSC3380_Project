import React, { useState } from "react";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import THEME from "../../assests/constants";
import { Provider } from "react-redux";
import store from "../../store.js";
import { lighten } from "polished";
import logo from "../../assests/AGIT_thumbnail.png";
import Link from "next/link";
import Modal from "../Modal";
import Button from "../Button";
import Navbar from "../Navbar";

const Background = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${props => lighten(0.15, props.theme.secondary)},
    ${props => lighten(0.4, props.theme.secondary)}
  );
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 15px;
  ${"" /* overflow: hidden; */}
  font-family: "Montserrat", sans-serif;
`;

const Header = styled.span`
  z-index: 1;
  display: flex;
  position: relative;
  padding: 15px;
  margin: auto;
`;

const Footer = styled.span`
  z-index: 1;
  position: fixed;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  left: 0;
  bottom: 1%;
  width: 100%;
  margin: 1px;
  padding: 1px;
  overflow: hidden;
  justify-content: center;
  ${"" /* background-color: ${p => */}
  ${"" /* transparentize(0.2, darken(0.2, p.theme.background))}; */}
`;

// Used to scale to mobile
const Image = styled.img`
  @media (max-width: 900px) {
    width: 30%;
    height: 25%;
  }
  @media (min-width: 900px) {
    width: 10%;
    height: 7.5%;
  }
  :hover {
    cursor: pointer;
  }
`;

// This will be shortened with the creation of the form component
const BugReportForm = () => {
  let Span = styled.span`
    background-color: "black";
    margin: auto;
  `;
  let Form = styled.form`
    border: none;
    span {
      float: right;
    }
  `;
  let Input = styled.input`
    width: 95%;
    border-radius: 30px;
    border: none;
    box-shadow: 0 0 10px 0 ${p => lighten(0.2, p.theme.secondary)};
    min-height: ${p => p.height};
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
  const [report, setReport] = useState({ title: "", description: "" });
  function handleSubmit(event) {
    const name = target.name;
    event.preventDefault();
    setReport({
      [name]: value
    });
    // handle report on the backend
    console.log(report);
  }
  return (
    <Span>
      <h3>Bug Report</h3>
      <Form onSubmit={handleSubmit}>
        <Input type='text' name='Title' placeholder='Title of Issue'></Input>
        <Input
          type='text'
          name='Description'
          height='50vh'
          placeholder='Description of issue in as much detail as possible'
        />
        <span>
          <Button size='medium' type='submit'>
            Submit
          </Button>
        </span>
      </Form>
    </Span>
  );
};

const Layout = props => {
  return (
    <div className='Layout'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat&display=swap'
          rel='stylesheet'
        ></link>
        <title>Agit - Agile Eats</title>
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={THEME}>
          <Background className='Content'>
            <Header>
            <Link href='/home'>
              <Image src={logo}></Image>
            </Link>

              <Navbar />

            </Header>
            {props.children}
            <Footer>
              <Modal
                title='Bug Report'
                element={<BugReportForm />}
                color='black'
              >
                Report an issue
              </Modal>
            </Footer>
          </Background>
        </ThemeProvider>
      </Provider>
    </div>
  );
};

export default Layout;
