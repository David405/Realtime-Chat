var express = require('express');
var users = require('../controller/user.js');
// middlewares
var { encode } = require('../middleware/jwt.js');

const router = express.Router();

router.post('/login/:userId', encode, (req, res, next) => { 

  });

module.exports = router;