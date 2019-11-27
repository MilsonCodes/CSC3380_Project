import model from "../models";

const { User } = model;

class Users {
  static signUp(req, res) {
    const {
      name,
      username,
      email,
      password,
      favorites,
      location,
      restaurant,
      admin
    } = req.body;
    return User.create({
      name,
      username,
      email,
      password,
      favorites,
      location,
      restaurant,
      admin
    }).then(userData =>
      res
        .status(201)
        .send({ success: true, message: "User successfully created", userData })
    );
  }
  static getAll(req, res) {
    const users = User.findAll();
    return users.then(users =>
      res.status(200).send({ message: "All Users: ", users })
    );
  }
  static getRestaurants(req, res) {
    const restaurants = User.findAll({ where: { restaurant: true } });
    return restaurants.then(restaurants =>
      res.status(200).send({ message: "All Restaurants: ", restaurants })
    );
  }
  static modify(req, res) {
    const {
      name,
      username,
      email,
      password,
      location,
      restaurant,
      admin
    } = req.body;
    return User.findById(req.params.userId)
      .then(user => {
        user
          .update({
            name: name || user.name,
            username: username || user.username,
            email: email || user.email,
            password: password || user.password,
            location: location || user.location,
            restaurant: restaurant || user.restaurant,
            admin: admin || user.admin
          })
          .then(updatedUser => {
            res.status.send(200).send({
              message: "User updated successfully",
              data: {
                name: name || updatedUser.name,
                username: username || updatedUser.username,
                email: email || updatedUser.email,
                password: password || updatedUser.password,
                location: location || updatedUser.location,
                restaurant: restaurant || updatedUser.restaurant,
                admin: admin || updatedUser.admin
              }
            });
          })
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
  static delete(req, res) {
    const user = User.findById(req.params.userId);
    return user
      .then(user => {
        if (!user) {
          return res.status(400).send({ message: "User not found" });
        }
        return special
          .update({ deleted: true, deletedBy: req.params.userId })
          .then(() =>
            res.status(200).send({ message: "User successfully deleted!" })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
}
export default Users;
