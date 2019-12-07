import Forms from "../components/Form";
import { logIn, logOut, setName } from "../actions/user";
import { connect } from "react-redux";

const mapDispatchToProps = {
  logIn,
  logOut,
  setName
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

const Register = (logIn, logOut, loggedIn) => (
  <div>
    <Forms.RegisterForm
      onSubmit={e => {
        logIn();
        setName(e.target.value);
      }}
    />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Register);
