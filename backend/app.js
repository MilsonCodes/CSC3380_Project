import http from "http";
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";

require("dotenv").config();

// Environment variables
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;
let message = "Welcome to the Agit API";
// Set up express app
const app = express();
const server = http.createServer(app);

// Log all requests
app.use(logger("dev"));
// Parse incoming data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("*", (req, res) => res.status(200).send({ message: message }));

server.listen(port, hostname, () => {
  console.log("Agit running at http://" + hostname + ":" + port + "/");
});
