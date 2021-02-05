var express = require('express');
var user = require('../controller/user.js');

const router = express.Router();

router.get('/', user.onGetAllUsers)
router.post('/', user.onCreateUser)
router.get('/:id', user.onGetUserById)
router.delete('/:id', user.onDeleteUserById)

module.exports = router;