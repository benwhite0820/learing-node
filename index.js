const express = require('express');

const app = express();

const PORT = 8080;

const friends = [
  {
    id: 0,
    name: 'Elon Musk',
  },
  {
    id: 1,
    name: 'Tim Cook',
  },
];

app.use(express.json());

app.post('/friends', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name',
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.lenght,
  };
  res.json(newFriend);
});

app.get('/get', (req, res) => {
  res.send('hello world');
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    return res.status(200).json(friend);
  }
  return res.status(404).json({
    error: 'Friend does not exist',
  });
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT} ...`);
});
