import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";

const Welcome = styled.h2`
  color: ${p => p.theme.text | "black"};
  padding: auto;
  margin: auto;
`;

const Descr = styled.p`
  color: ${p => p.theme.text | "#616161"};
  padding: 10px;
`;

const Head = styled.h3`
  color: ${p => p.theme.text | "black"};
  padding: auto;
  margin: auto;
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
  h3 {
    padding: 20px 0 0 0;
    text-align: center;
  }
  background-color: ${offWhite};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  border: none;
  border-radius: 50px;
  transition: all ease-in-out 1s;
`;

const Divider = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const Break = styled.div`
  width: 100%;
`;

const Header = () => {
  return <Welcome>About Us</Welcome>;
};

const Description = () => {
  return (
    <React.Fragment>
      <Head>What is Agit?</Head>
      <Descr>
        Agit is a service that allows customers and businesses to connect.
        <br />
        Using Agit, businesses have a place to share information, specials, and
        deals to customers.
        <br />
        Customers will be able to discover what businesses have to offer for
        them.
      </Descr>
      <Break />
      <Head>How Much Does it Cost to Use Agit?</Head>
      <Descr>
        For both customers and businesses, Agit is 100% free to use.
      </Descr>
      <Break />
      <Head>How Do I Get Started?</Head>
      <Descr>
        It's simple!
        <br />
        Both customers and businesses can go and register{" "}
        <a href='/register'>here</a>.
        <br />
        For customers who are not interested in registering and just browsing,
        click <a href='/home'>here</a>.
      </Descr>
    </React.Fragment>
  );
};

const About = () => {
  return (
    <Container>
      <Header />
      <Break />
      <Description />
    </Container>
  );
};

export default About;
