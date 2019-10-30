import http from "http";
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import routes from "./server/routes";

const hostname = "127.0.0.1";
const PORT = process.env.PORT || 3000;
const app = express(); // setup express application
const server = http.createServer(app);
const next = require("next");
const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config
const welcome = "Welcome to Agit backend!";
var cors = require("cors");

nextApp.prepare().then(() => {
  // express code here
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/photos", require("./routes/index"));
  app.get("*", (req, res) => {
    return handle(req, res); // for all the react stuff
  });
  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`ready at http://${hostname}:${PORT}`);
  });
});

// app.use(logger("dev")); // log requests to the console
// // Parse incoming requests data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());
// routes(app);

// app.get("*", (req, res) => res.status(200).send(welcome));
// server.listen(PORT ? PORT : 3001, hostname, err => {
//   if (err) throw err;
//   console.log(`Server running at http://${hostname}:${PORT}/`);
// });
