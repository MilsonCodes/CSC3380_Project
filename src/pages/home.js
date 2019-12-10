// import styled from "styled-components";
import food from "../assests/food.jpg";
import drawing from "../assests/Drawing.png";
import food2 from "../assests/food2.jpeg";
import food3 from "../assests/food3.jpg";
import food4 from "../assests/food4.jpg";
import food5 from "../assests/food5.jpg";
import food6 from "../assests/food6.jpg";
import food7 from "../assests/food7.jpg";
import food8 from "../assests/food8.jpg";
import Carousel from "../components/Carousel";
import styled from "styled-components";
// import LinkComp from "../components/Link/index.js";

let Div = styled.div`
  height: 90%;
  width: 95%;
`;

const Home = () => {
  return (
    <Div>
      <Carousel specials={options1} title='Favorites'></Carousel>
      <Carousel specials={options2} size={4} title='Nearby'></Carousel>
    </Div>
  );
};

export default Home;

let special1 = {
  title: "Welcome!",
  description: "This is what a special will look like!",
  image: food,
  owner: 1,
  favorite: false
};

let special2 = {
  title: "Food",
  description: "Come get it while it's hot!",
  image: drawing,
  owner: 2,
  favorite: false
};

let special3 = {
  title: "Veggies!",
  description: "Healthy bowls of vegetables half-off!",
  image: food2,
  owner: 74,
  favorite: false
};

let special4 = {
  title: "FISH!!!!",
  description: "Salmon, nom nom nom!",
  image: food3,
  owner: 74,
  favorite: false
};

let special5 = {
  title: "Make your own food",
  description: "Pay us to make your own food!",
  image: food4,
  owner: 74,
  favorite: false
};

let special6 = {
  title: "Drinks",
  description: "Please Drink Responsibly",
  image: food5,
  owner: 74,
  favorite: false
};

let special7 = {
  title: "Pizza BOGO",
  description: "Buy one get one free!",
  image: food6,
  owner: 74,
  favorite: true
};

let special8 = {
  title: "Week old sushi!",
  description: "We'll pay you to eat it... First you sign a waiver.",
  image: food7,
  owner: 74,
  favorite: true
};

let special9 = {
  title: "Half price local brews",
  description: "Please Drink Responsibly",
  image: food8,
  owner: 74,
  favorite: true
};

let options2 = [
  special1,
  special2,
  special3,
  special4,
  special5,
  special6,
  special7,
  special8,
  special9,
  special1,
  special2,
  special3,
  special4,
  special5
];

let options1 = [special7, special8, special9];
