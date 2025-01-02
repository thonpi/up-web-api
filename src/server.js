const express = require("express");
const route = require("./route");

const server = express();
const port = 3000;

server.use(express.json());

server.use(route);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
