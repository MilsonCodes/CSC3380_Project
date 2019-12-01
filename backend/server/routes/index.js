import Users from "../controllers/user";
import Specials from "../controllers/special";

// Define API endpoints here

export default app => {
  app.get("/api", (req, res) =>
    res.status(200).send({ message: "Welcome to the Agit API!" })
  );

  app.post("/api/users", Users.signUp); // Route for user signup
  app.get("/api/users/all", Users.getAll); // Route for getting all users
  app.get("/api/restaurants", Users.getRestaurants); // Route for getting all restaurants
  app.put("/api/users/:userId", Users.modify); // Route for editing a user
  app.delete("/api/users/:userId:deleterId", Users.delete); // Route for deleting a user

  app.post("/api/users/:userId/special", Specials.create); // Route for user to create a special
  app.get("/api/allSpecials", Specials.getAll); // Route for showing all specials
  app.get("/api/activeSpecials", Specials.getAllActive); // Route for showing all active specials
  app.put("/api/specials/:specialId", Specials.modify); // Route for editing a special
  app.delete("/api/specials/:specialId", Specials.delete); // Route for deleting a special
};
