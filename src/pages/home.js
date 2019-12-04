import Card from "../components/Card";
import food from "../assests/food.jpg";
// import LinkComp from "../components/Link/index.js";

let options = {
  title: "Welcome!",
  description: "This is what a special will look like!",
  image: food
};

const Home = () => {
  return (
    <React.Fragment>
      <h2>Welcome to Agit!</h2>
      <Card fields={options}></Card>
    </React.Fragment>
  );
};

export default Home;
