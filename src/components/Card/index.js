import React, { useState } from "react";
import styled from "styled-components";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { GiExpand } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import Modal from "../Modal";
import { darken } from "polished";
import LinkComp from "../Link/index.js";

let Background = styled.div`
  background: ${p => p.theme.white};
  min-width: 15%;
  max-width: 20%;
  height: 22.5%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  border-radius: 30px;
  padding: 10px;
  margin: 1.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  @media (max-width: 900px) {
    width: 80%;
    height: 80%;
  }
  @media (min-width: 900px) {
    width: 65%;
    height: 65%;
  }
  :hover {
    cursor: cursor;
  }
`;

let Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Buttons = styled.span`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: auto;
  margin: auto;
  span {
    padding: 10px 10px 0 10px;
    :hover {
      color: ${p =>
        p.color
          ? p.color != "black"
            ? darken(0.3, p.color)
            : darken(-0.3, p.color)
          : darken(0.35, p.theme.secondary)};
      cursor: pointer;
    }
  }
`;

const Card = props => {
  const [favorited, toggleFav] = useState(props.fields.favorite || false);
  let click = () => {
    toggleFav(!favorited);
  };
  let Fav = () => {
    if (favorited)
      return (
        <span onClick={click}>
          <MdFavorite></MdFavorite>
        </span>
      );
    else
      return (
        <span onClick={click}>
          <MdFavoriteBorder></MdFavoriteBorder>
        </span>
      );
  };
  let fields = props.fields;
  const FullCard = () => {
    return (
      <Div>
        <h2>{fields.title}</h2>
        <Image src={fields.image || props.image} id='picture'></Image>
        <h4>{fields.description}</h4>
        <span>
          <h5>Starts: {fields.startDate || "NOW"}</h5>
          <h5>Ends: {fields.endDate || "N/A"}</h5>
        </span>
        <Buttons color='black'>
          <Fav></Fav>
          <LinkComp to={"/profile/" + fields.owner}>
            <p>
              View Full Restaurant <IoIosArrowForward></IoIosArrowForward>
            </p>
          </LinkComp>
        </Buttons>
      </Div>
    );
  };
  return (
    <Background>
      <h2>{fields.title}</h2>
      <Image src={fields.image}></Image>
      <h4>{fields.description}</h4>
      <Buttons color='black'>
        <Fav></Fav>
        <span>
          <Modal element={<FullCard fields={fields}></FullCard>} color='black'>
            <GiExpand></GiExpand>
          </Modal>
        </span>
      </Buttons>
    </Background>
  );
};

export default Card;
