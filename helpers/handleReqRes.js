/*
 * title: handle request response
 * Description : handle request and response
 * Author: Gazi Ashiq Reza
 * Date: 1/8/2024
 *
 *
 */

// dependencies
const { StringDecoder } = require("node:string_decoder");
const url = require("node:url");
const routes = require("../routes");
const {
  notFoundHandler,
} = require("../handlers/routeHandlers/notFoundHandler");

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  // request handling
  // get the url and parse it
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  // trim start and end slashes in an pathName
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parseUrl.query;
  const headersObject = req.headers;

  const requestProperties = {
    parseUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject,
  };

  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  chosenHandler(requestProperties, (statusCode, payload) => {
    statusCode = typeof statusCode === "number" ? statusCode : 500;
    payload = typeof payload === "object" ? payload : {};

    const payloadString = JSON.stringify(payload);

    // return the final response
    res.writeHead(statusCode);
    res.end(payloadString);
  });

  // payload data send from postman body as buffer data chunk to real data convert using StringDecoder
  const decoder = new StringDecoder("utf-8");
  let realData = "";
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    // response handle
    res.end("hello programmers");
  });
};

module.exports = handler;
