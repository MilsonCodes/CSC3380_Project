import Link from "next/link";
import styled from "styled-components";
import { darken } from "polished";

const LinkWrapper = styled.div`
  overflow: hidden;
  text-decoration: underline;
  color: ${p =>
    p.color ? darken(0.1, p.color) : darken(0.2, p.theme.secondary)};
  :hover {
    color: ${p =>
      p.color ? darken(0.3, p.color) : darken(0.35, p.theme.secondary)};
    cursor: pointer;
  }
`;

const LinkComp = props => {
  return (
    <LinkWrapper>
      <Link href={props.to}>{props.children}</Link>
    </LinkWrapper>
  );
};

export default LinkComp;
