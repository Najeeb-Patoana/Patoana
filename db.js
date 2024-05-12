const mongoose=require("mongoose");
require('dotenv').config();
// const mongourl = process.env.DB_URL_LOCAL;
// 
const mongourl=process.env.DB_URL;

mongoose.connect(mongourl);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDb is connected');
});

db.on('error', (error) => {
  console.error('Problem Occurred:', error);
});

db.on('disconnected', () => {
  console.log('MongoDb is disconnected');
});


module.exports = db;