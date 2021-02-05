var express = require('express');
// controllers
var deleteController = ('../controller/delete.js');

const router = express.Router();

router.delete('/room/:roomId', deleteController.deleteRoomById)
router.delete('/message/:messageId', deleteController.deleteMessageById)

module.exports = router;