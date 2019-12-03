import model from "../models";

const { User } = model;
const { Special } = model.Special;

class Users {
  static signUp(req, res) {
    const {
      name,
      username,
      email,
      password,
      location,
      restaurant,
      admin
    } = req.body; // Get fields from request body
    return User.create({
      // Create user based on fields
      name,
      username,
      email,
      password,
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
    const users = User.findAll({ where: { deleted: false } }); // Find all users that aren't deleted
    return users.then(
      users => res.status(200).send({ message: "All Users: ", users }) // Return the users
    );
  }

  static getRestaurants(req, res) {
    const restaurants = User.findAll({
      // Find all restaurant users that haven't been deleted
      where: { restaurant: true, deleted: false }
    });
    return restaurants.then((
      restaurants // Return the list of restaurants
    ) => res.status(200).send({ message: "All Restaurants: ", restaurants }));
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
    } = req.body; // Get the fields from the request body
    return User.findByPk(req.params.userId) // Find the user to update
      .then(user => {
        // Update user or use old values
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
    const user = User.findByPk(req.params.userId); // Find user that is being deleted
    const deleter = User.findByPk(req.params.deleterId); // Find user that is deleting the account
    return user
      .then(user => {
        if (!user) {
          // Check if user exists
          return res.status(400).send({ message: "User not found" });
        } else if (!deleter.admin)
          // Check if the deleter is an admin
          return res
            .status(400)
            .send({ message: "Must be an admin to delete a user" });
        return user // Return the user being deleted
          .update({ deleted: true, deletedBy: deleter.id }) // Mark the account as deleted and update who deleted it
          .then(() =>
            res.status(200).send({ message: "User successfully deleted!" })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }

  static favorite(req, res) {
    const user = User.findByPk(req.params.userId); // Find user by ID
    const iD = req.params.specialId; // Save special ID to use
    return user
      .then(user => {
        if (!user)
          // Check user exists
          return res.status(400).send({ message: "User not found" });
        return user
          .update({
            // Add the special ID to the list of favorites
            favorites: sequelize.fn(
              "array_append",
              sequelize.col("favorites"),
              iD
            )
          })
          .then(() =>
            res.status(200).send({
              message: "Special added to favorites: ",
              data: Special.findByPk(iD)
            })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }

  static getFavorites(req, res) {
    const user = User.findByPk(req.params.userId); // Get user from request parameters
    const favs = user.favorites; // Store list of favorites
    if (!favs) {
      // Check favs exists
      if (!user)
        // Check user exists
        return res.status(400).send({ message: "Invalid User" });
      return res.status(400).send({ message: "No favorites found" });
    }
    return favs
      .then(favs => {
        return favs
          .then(() => {
            res.status(200).send({ message: "Favorites: ", data: favs });
          })
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
}
export default Users;
