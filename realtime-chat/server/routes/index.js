var express = require('express');

var indexRouter = require("../router/index.js");
var userRouter = require("../router/user.js");
var chatRoomRouter = require("../router/chatRoom.js");
//var deleteRouter = require("../router/delete.js");
//var { encode } = require('../middleware/jwt');


const app = express();

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/room", chatRoomRouter);
//app.use("/delete", deleteRouter);

module.exports = app;