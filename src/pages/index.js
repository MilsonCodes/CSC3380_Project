import LinkComp from "../components/Link/index.js";

const Index = () => {
  	return (
		<React.Fragment>
			<h2>Index Page</h2>
			<LinkComp to="/home">
				<p>Home</p>
			</LinkComp>
		</React.Fragment>
  	)
}

export default Index;
