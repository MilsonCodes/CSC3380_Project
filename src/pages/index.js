import LinkComp from "../components/Link/index.js";
// import Button from "../components/Button/index";
// import Router from "next/router";
import styled from "styled-components";

const Welcome = styled.h2`
  color: ${p => p.theme.text | "black"};
`;

const Descr = styled.p`
  color: ${p => p.theme.text | "#616161"};
`;

const Container = styled.span`
  text-align: center;
`;

const Divider = styled.div`
  margin: 0 auto;
`;

const Message = () => {
  return <Welcome>Welcome to Agit!</Welcome>;
};

const Description = () => {
  return (
    <Descr>
      We are dedicated to connecting customers to businesses that offer
      specials. <br></br>100% free, 100% accessible, 100% special.
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
        <LinkComp to='/home'>
          <p>Browse without logging in</p>
        </LinkComp>
      </Divider>
    </Container>
  );
};

export default Index;
