import React from "react";
import styled from "styled-components";
import Card from "../Card";

let Container = styled.span`
  width: 80%;
  hieght: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: auto;
  margin: 25px;
`;

let Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Carousel = props => {
  let options = props.specials;
  let cards = options.map(option => (
    <React.Fragment>
      <Card fields={option}></Card>
    </React.Fragment>
  ));
  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <Span>
        <Container>{cards}</Container>
      </Span>
    </React.Fragment>
  );
};

export default Carousel;
