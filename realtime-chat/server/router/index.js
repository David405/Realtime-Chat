var express = require('express');
var users = require('../controller/user.js');
// middlewares
var { encode } = require('../middleware/jwt');

const router = express.Router();

router.post('/login/:userId', encode, (req, res, next) => { 
    //console.log(process.env.SECRET.KEY)
    return res.status(200).json({
        success: true,
        authorization: req.authToken,
      });
  });

module.exports = router;