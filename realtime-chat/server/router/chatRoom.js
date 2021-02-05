var express = require('express');
// controllers
var chatRoom = require('../controller/chatRoom.js');

const router = express.Router();

router.get('/', chatRoom.getRecentConversation)
router.get('/:roomId', chatRoom.getConversationByRoomId)
router.post('/initiate', chatRoom.initiate)
router.post('/:roomId/message', chatRoom.postMessage)
router.put('/:roomId/mark-read', chatRoom.markConversationReadByRoomId)

module.exports = router;