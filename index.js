/*
 * Title: uptime monitoring Application
 * Description: A restful api to monitoring up or down time user define links
 * Author:
 * Date: 2023-01-02  20:09
 *
 */

//dependencies
const http = require("http");
const url = require("url");
const { StringDecoder } = require("string_decoder");

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
  // request handling

  //get url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObj = parsedUrl.query;
  const header = req.headers;

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    res.end("hello world!");
  });

  //check if it is a request to /uptime
  if (parsedUrl.pathname === "/uptime") {
    res.writeHead(200, {});
  }

  //res handle request
};

//start server
app.createServer();
