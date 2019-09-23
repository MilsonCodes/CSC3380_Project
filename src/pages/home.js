import LinkComp from "../components/Link/index.js";

const Home = () => {
	return (
		<React.Fragment>
			<h2>Welcome to Agit!</h2>
			<LinkComp to="/login">
        			<p>Login to Continue</p>
        		</LinkComp>
		</React.Fragment>
	);
}

export default Home;
