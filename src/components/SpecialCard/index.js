import React from "react";
import styled from "styled-components";
import Button from "../Button";
import LinkComp from "../Link";
import { FiStar } from "react-icons/fi";
import Modal from "../Modal";
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import {ListGroupItem} from 'react-bootstrap';


const SpecialCard = props => {



  return (
    //
    // <div>
    //   <CardDiv>
    //     <p> {props.title} </p>
    //
    //     <p> {props.description} </p>
    //
    //     <img src={props.image} alt="image of restaurant or special"></img>
    //
    //     <LinkComp to={props.url}> {props.restaurantName} </LinkComp>
    //       <Button icon = {FiStar} size = "medium">
    //
    //       </Button>
    //       <Modal>
    //
    //       </Modal>
    //   </CardDiv>
    // </div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
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


export default SpecialCard;
