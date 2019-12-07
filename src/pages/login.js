import Forms from "../components/Form";
import { logIn, logOut } from "../actions/user";
import { connect } from "react-redux";

const mapDispatchToProps = {
  logIn,
  logOut
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  routeAfterLogin: state.routeAfterLogin
});

const Login = (logIn, logOut, loggedIn) => (
  <div>
    <Forms.LoginForm />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
