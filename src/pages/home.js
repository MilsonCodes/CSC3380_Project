import LinkComp from "../components/Link/index.js";
import Card from "../components/Card"
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
