
let projectData = {};

const express = require('express');

const app = express();

/* Middleware*/
// const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, () => {
  console.log('Server is running!');
  console.log(`Running on localhost: ${port}.`);
});

// GET Route
app.get('/all', (req, res) => {
  res.send(projectData);
});


// POST Route
app.post('/add', (req, res) => {
  projectData = req.body;
  res.json({Response: 'Positive'});
});

// POST feelings
/* const data = [];
const addFeelings = (req, res) => {
  data.push(req.body)
}

app.post('/entry', addFeelings); */