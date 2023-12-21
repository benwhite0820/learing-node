const express = require('express');
const path = require('path');

// router
const friendRouter = require('./routes/friends.router');
const messageRouter = require('./routes/message.router');

const app = express();

const PORT = 8080;

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/friends', friendRouter);

app.use('/messages', messageRouter);

app.listen(PORT, () => {
  console.log(`server running on ${PORT} ...`);
});
