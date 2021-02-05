var http = require("http");
var express = require("express");
var logger = require("morgan");
var cors = require("cors");
// routes
require('dotenv').config();
require("./config/mongo");
var routes = require("./routes");
// middlewares
var { decode } = require('./middleware/jwt');

const app = express();
 
/** Get port from environment and store in Express. */
const port = process.env.PORT;
app.set("port", port);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

/** catch 404 and forward to error handler */
app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'API endpoint doesnt exist'
  })
});

/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port);
/** Event listener for HTTP server "listening" event. */
server.on("listening", () => {
  console.log(`Listening on port:: http://localhost:${port}/`)
});