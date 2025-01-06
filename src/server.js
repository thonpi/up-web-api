const express = require("express");
// const morgan = require("morgan");
const route = require("./route");
const apiRoute = require("./api-route");
const errorHandler = require("./middleware/errorHandler");
const notFoundHandler = require("./middleware/notFoundHandler");
const requestTrackingLog = require("./middleware/requestTrackingLog");

const server = express();
const port = 3000;

server.use(express.json());


server.use(requestTrackingLog);
server.use(errorHandler);
server.use(notFoundHandler);

// Middleware to log all request details
// server.use((req, res, next) => {
  // const { method, url, headers, body, query } = req;
  // const timestamp = new Date().toISOString();

  // console.log(`[${timestamp}] ${method} ${url}`);
  // console.log('Headers:', JSON.stringify(headers, null, 2));
  // console.log('Body:', JSON.stringify(body, null, 2));
  // console.log('Query Parameters:', JSON.stringify(query, null, 2));

  // // You can also log the response status after the request is handled
  // res.on('finish', () => {
  //     console.log(`[${timestamp}] Response Status: ${res.statusCode}`);
  // });

  // next();
// });

server.use(route);
server.use(apiRoute);


server.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
