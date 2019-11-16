import Users from "../controllers/user";
// Define API endpoints here

export default app => {
  app.get("/api", (req, res) =>
    res.status(200).send({ message: "Welcome to the Agit API!" })
  );
  app.post("/api/users", Users.signUp); // Route for user signup
};
