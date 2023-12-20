const express = require('express');

const messageController = require('./controllers/messages.controller');
const friendController = require('./controllers/friends.controller');

const app = express();

const PORT = 8080;

app.use(express.json());

app.post('/friends', friendController.postFriend);
app.get('/friends', friendController.getFriends);
app.get('/friends/:friendId', friendController.getFriend);

app.get('/messages', messageController.getMessages);
app.post('/messages', messageController.postMessage);

app.listen(PORT, () => {
  console.log(`server running on ${PORT} ...`);
});
