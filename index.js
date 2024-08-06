/*
 * title: uptime Monitoring Application
 * Description : A RESTFul API to monitor up to down time of user defined links
 * Author: Gazi Ashiq Reza
 * Date: 1/8/2024
 *
 *
 */

// dependencies
const http = require("node:http");
const { handleReqRes } = require("./helpers/handleReqRes");

// app object - module scaffolding
const app = {};

// configaration
app.config = {
  port: 5000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleResRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

// handle request response
app.handleResRes = handleReqRes;

// start the server
app.createServer();
