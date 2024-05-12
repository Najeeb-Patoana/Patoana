//Najeeb Patoana
const express = require('express')
const db = require('./db.js')
const bodyParser = require('body-parser')
const port = 3000;
const app = express();
app.use(bodyParser.json());
const person_routers=require('./routes/person_routes.js')
app.set('view engine', 'ejs');
app.use('/person',person_routers)


  
  app.get('/', (req, res) => {
    res.render("index" )
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
}).on('error', (err) => {
  console.error('Error starting server:', err);
});