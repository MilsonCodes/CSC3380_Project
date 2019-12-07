import { connect } from "react-redux";
import { logIn, logOut, setName } from "../../actions/user";

const mapDispatchToProps = {
  logIn,
  logOut,
  setName
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

let Profile = (logIn, logOut, loggedIn, state) => {
  return (
    <div>
      <h1>Profile!</h1>
      <span></span>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
