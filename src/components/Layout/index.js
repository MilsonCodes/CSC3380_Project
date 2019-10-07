import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import THEME from "../../assests/constants";
import { lighten } from "polished";
import logo from "../../assests/AGIT_thumbnail.png";

const Background = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${props => lighten(0.15, props.theme.background)},
    ${props => lighten(0.3, props.theme.background)}
  );
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 15px;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
`;

const Header = styled.span`
  z-index: 1;
  display: flex;
  position: relative;
  padding: 15px;
  margin: auto;
`;

const Image = styled.img`
  @media (max-width: 900px) {
    width: 30%;
    height: 25%;
  }
  @media (min-width: 900px) {
    width: 10%;
    height: 7.5%;
  }
`;

const Layout = props => {
  return (
    <div className='Layout'>
      <Head>
        <link rel='stylesheet' href='/css/video-react.css' />
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat&display=swap'
          rel='stylesheet'
        ></link>
        <title>Agit - Eat Special</title>
      </Head>
      <ThemeProvider theme={THEME}>
        <Background className='Content'>
          <Header>
            <Image src={logo}></Image>
          </Header>
          {props.children}
        </Background>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
