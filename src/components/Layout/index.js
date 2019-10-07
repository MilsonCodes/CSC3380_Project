import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import THEME from "../../assests/constants";
import { lighten } from "polished";

const Background = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${props => lighten(0.2, props.theme.background)},
    ${props => lighten(0.3, props.theme.background)}
  );
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 15px;
  overflow: hidden;
`;

const Layout = props => {
  return (
    <div className='Layout'>
      <Head>
        <title>Agit - Eat Special</title>
      </Head>
      <ThemeProvider theme={THEME}>
        <Background className='Content'>{props.children}</Background>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
