import model from "../models";

const { User } = model;

class Users {
  static signUp(req, res) {
    console.log(req.body);
    const {
      name,
      username,
      email,
      password,
      favorites,
      location,
      restaurant
      // admin
    } = req.body;
    return User.create({
      name,
      username,
      email,
      password,
      favorites,
      location,
      restaurant
      // admin
    }).then(userData =>
      res
        .status(201)
        .send({ success: true, message: "User successfully created", userData })
    );
  }
}
export default Users;
