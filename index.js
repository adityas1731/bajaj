const express = require('express');
const app = express();

// Your user_id based on your full name and date of birth
const user_id = "john_doe_17091999";

app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
  const data = req.body.data || [];

  // Extract the necessary data from the request
  const alphabets = data.filter(char => /[a-zA-Z]/.test(char));
  const numbers = data.filter(char => /[0-9]/.test(char));
  const highest_alphabet = alphabets.length > 0 ? alphabets.sort().pop() : null;

  const response = {
    is_success: true,
    user_id,
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    numbers,
    alphabets,
    highest_alphabet: highest_alphabet ? [highest_alphabet] : []
  };

  res.json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
