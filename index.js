/*
 * Title: uptime monitoring Application
 * Description: A restful api to monitoring up or down time user define links
 * Author:
 * Date: 2023-01-02  20:09
 *
 */

//dependencies
const http = require("http");

//app object - module scaffolding
const app = {};

//app configuration
app.config = {
  port: process.env.PORT || 3000,
};

//create server

app.createServer = () => {
  //create server
  const server = http.createServer(app.handleReqRes);

  //server.listen
  server.listen(app.config.port, () => {
    console.log(`Server listening on port ${app.config.port}`);
  });
};

app.handleReqRes = (req, res) => {
  //res handle request
  res.end("hello world!");
};

//start server
app.createServer()