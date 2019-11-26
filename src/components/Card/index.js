import React from "react";
import styled from "styled-components";
import Button from "../Button";
import LinkComp from "../Link"
import { FiStar } from "react-icons/fi";

const CardDiv = styled.div`
  position: absolute;

  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  border-radius: 4px;
`;

const Card = props => {
  //?????????????????????


  return (

    <div>
      <CardDiv>
        <p> {this.title} </p>

        <p> {this.description} </p>

        <img src={this.image} alt="image of restaurant or special"></img>

        <LinkComp to={this.url}> {this.restaurantName} </LinkComp>    //is this done right?
          <Button size = "medium">
            <FiStar/>
          </Button>
          <Modal>
          //what props does a modal require?
          </Modal>
      </CardDiv>
    </div>
  );
};


// Card.propTypes = {
//   /**
//    * Image to be displayed in the button
//    */
//   image: PropTypes.element,
//   /**
//    *  Restaurant Name
//    */
//   restaurantName: PropTypes.string,
//   /**
//    *  title of special
//    */
//   title: PropTypes.string,
//   /**
//    * description of special
//    */
//   description: PropTypes.string,
//   /**
//    * url to restaurant
//    */
//   url: PropTypes.string,
//   /**
//    * time special is valid
//    */
//   time: PropTypes.string,
//   /**
//    * days which special is valid
//    */
//   days: PropTypes.string,
// };


export default Card;
