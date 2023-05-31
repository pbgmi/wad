const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Define a model for the data
const User = mongoose.model('User', userSchema);

// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

// Define the API routes
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

app.put('/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
});

app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});