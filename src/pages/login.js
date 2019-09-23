import LinkComp from '../components/Link';

const Login = () => (
	<div>
		<h2>Welcome to the Login Page!</h2>
		<LinkComp to="/home">
			<p>Home Page</p>
		</LinkComp>
	</div>
);

export default Login;
