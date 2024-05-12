//Najeeb Patoana
const express = require('express')
const db = require('./db.js')
require('dotenv').config();
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());
const person_routers=require('./routes/person_routes.js')
app.set('view engine', 'ejs');
app.use('/person',person_routers)


  
  app.get('/', (req, res) => {
    res.render("index" )
});

const PORT=process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
}).on('error', (err) => {
  console.error('Error starting server:', err);
});