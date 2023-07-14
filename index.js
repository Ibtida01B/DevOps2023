const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function generateVaccinationDate() {
  const startDate = new Date(); // Set the start date as today
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + 30); // Set the end date as 30 days from today

  const vaccinationDate = new Date(
    startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())
  );

  return vaccinationDate.toISOString(); // Convert the date to ISO string format
}

// GET route to display the registration form
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/register.html');
});

// POST route for user registration
app.post('/register', (req, res) => {
  const { name, address, nationID } = req.body;

  // Validate required fields
  if (!name || !address || !nationID) {
    res.status(400).send('Required fields are missing');
    return;
  }

  // Validate input formats
  if (nationID.length !== 6 || !/^[A-Za-z0-9]+$/.test(nationID)) {
    res.status(400).send('Invalid input formats');
    return;
  }

  // Perform necessary actions for registration (e.g., store user data, validation, etc.)

  // Generate vaccination date
  const vaccinationDate = generateVaccinationDate();

  // Return response with vaccination date
  res.json({ message: 'User registered successfully!', vaccinationDate });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
