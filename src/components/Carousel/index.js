import React from "react";
import styled from "styled-components";
import Card from "../Card";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { lighten } from "polished";

let Container = styled.span`
  width: 80%;
  hieght: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: auto;
  margin: 25px;
  ${"" /* box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16); */}
  border-radius: 50px;
`;

let Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

let ChevronLeft = styled(FaChevronLeft)`
  color: ${p => (p.left ? "black" : p.theme.background)};
  display: ${p => (p.left ? "default" : "none")}
  :hover {
    color: ${p => (p.left ? lighten(0.2, "black") : p.theme.background)};
    cursor: ${p => (p.left ? "pointer" : "auto")};
  }
`;

let ChevronRight = styled(FaChevronRight)`
  color: ${p => (p.right ? "black" : p.theme.background)};
  display: ${p => (p.right ? "default" : "none")}
  :hover {
    color: ${p => (p.right ? lighten(0.2, "black") : p.theme.background)};
    cursor: ${p => (p.right ? "pointer" : "auto")};
  }
`;

// The carousel component takes an array of objects called "specials" that will be mapped to the carousel
// It also takes an optional size prop to determine how many specials are displayed at a time
// See pages/home.js to see how special objects are constructed
const Carousel = props => {
  const fields = props.specials;
  const size = props.size || 5;

  const [options, switchOptions] =
    fields.length > size
      ? React.useState({
          data: fields.slice(0, size),
          right: true,
          left: false,
          offset: size
        })
      : React.useState({ data: fields, right: false, left: false, offset: 0 });

  let moveRight = () => {
    let move = options.offset + size > fields.length ? false : true;
    switchOptions({
      data: fields.slice(options.offset, options.offset + size),
      right: move,
      left: true,
      offset: options.offset + size
    });
    console.log(options.right);
  };
  let moveLeft = () => {
    let move = options.offset - 2 * size <= 0 ? false : true;
    switchOptions({
      data: fields.slice(options.offset - 2 * size, options.offset - size),
      right: true,
      left: move,
      offset: options.offset - size
    });
  };

  let Cards = () => {
    return options.data.map(option => (
      <React.Fragment key={option.title}>
        <Card fields={option}></Card>
      </React.Fragment>
    ));
  };

  let Left = props => {
    return props.left ? (
      <span onClick={moveLeft}>
        <ChevronLeft {...props}></ChevronLeft>
      </span>
    ) : (
      <span>
        <ChevronLeft {...props}></ChevronLeft>
      </span>
    );
  };
  let Right = props => {
    return props.right ? (
      <span onClick={moveRight}>
        <ChevronRight {...props}></ChevronRight>
      </span>
    ) : (
      <span>
        <ChevronRight {...props}></ChevronRight>
      </span>
    );
  };
  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <Span>
        <Left left={options.left}></Left>
        <Container>
          <Cards></Cards>
        </Container>
        <Right right={options.right}></Right>
      </Span>
    </React.Fragment>
  );
};

export default Carousel;
