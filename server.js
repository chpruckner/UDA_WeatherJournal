
let projectData = {};

const express = require('express');

const app = express();

/* Middleware*/
// const bodyParser = require('body-parser'); <- depricated
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const cors = require('cors');
app.use(cors());

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
