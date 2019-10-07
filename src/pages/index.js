import LinkComp from "../components/Link/index.js";
import Button from "../components/Button/index";
import Router from "next/router";

const Index = () => {
  return (
    <React.Fragment>
      <h2>Index Page</h2>
      <h2>Welcome</h2>
      <Button onClick={() => Router.push("/login")}>
        Login to save favorites
      </Button>
      <Button height='50px' onClick={() => Router.push("/home")}>
        Browse without logging in
      </Button>
      <LinkComp to='/home'>
        <p>Home</p>
      </LinkComp>
    </React.Fragment>
  );
};

export default Index;
