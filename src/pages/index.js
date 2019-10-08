import React from "react";
import LinkComp from "../components/Link/index.js";
import styled from "styled-components";
import { transparentize } from "polished";

const Welcome = styled.h2`
  color: ${p => p.theme.text | "black"};
  padding: auto;
  margin: auto;
`;

const Descr = styled.p`
  color: ${p => p.theme.text | "#616161"};
  padding-top: 25px;
`;

let offWhite = transparentize(0.2, "white");

const Container = styled.div`
  p {
    text-align: center;
  }
  padding: 20px 20px;
  h2 {
    padding: 20px 0 10px 10%;
  }
  background-color: ${offWhite};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  border: none;
  border-radius: 50px;
  transition: all ease-in-out 1s;
  height: 70%;
`;

const Divider = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  top: 30%;
`;

const Break = styled.div`
  width: 100%;
`;

const Message = () => {
  return <Welcome>Welcome to Agit!</Welcome>;
};

const Description = () => {
  return (
    <Descr>
      We are dedicated to connecting customers to businesses that offer
      discounts and deals on a monthly, weekly, or daily basis.
      <br></br>
      <br></br>
      100% free, 100% accessible, 100% special.
    </Descr>
  );
};

const Index = () => {
  return (
    <Container>
      <Message></Message>
      <Description></Description>
      <Divider>
        <LinkComp to='/login'>
          <p>Login to save favorites</p>
        </LinkComp>
        <Break />
        <LinkComp to='/home'>
          <p>Browse without logging in</p>
        </LinkComp>
      </Divider>
    </Container>
  );
};

export default Index;
