const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET route to display the registration form
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/register.html');
});

// POST route for user registration
app.post('/register', (req, res) => {
  const { name, address, nationID } = req.body;

  // Perform necessary actions (e.g., store user data, validation, etc.)

  res.send('User registered successfully!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
