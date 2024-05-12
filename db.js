const mongoose=require("mongoose");

// const mongourl = "mongodb://localhost:27017/test";
// 
const mongourl="mongodb+srv://najeebpatoana:najeeb123456@cluster0.hc9x5po.mongodb.net/"

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