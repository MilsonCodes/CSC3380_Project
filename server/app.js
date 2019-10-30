const routes = require("./routes/index");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const hostname = "127.0.0.1";
const PORT = process.env.PORT || 3000;
const next = require("next");
const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config
const welcome = "Welcome to Agit backend!";
var cors = require("cors");

nextApp.prepare().then(() => {
  // express code here
  const app = express(); // setup express application
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  routes(app);
  app.use(cors());
  app.get("*", (req, res) => {
    res.status(200).send(welcome);
    return handle(req, res); // for all the react stuff
  });
  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`ready at http://${hostname}:${PORT}`);
  });
});
