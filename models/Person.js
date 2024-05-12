const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    sap_id: {
        type: Number,
        require: true,
        unique: true
    },
    course: {
        type: String,
        require: true,
        enum:['se', 'cs', 'it']
    },
    salary: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    }

})
//creating model of this to be export

const Person=mongoose.model('person',personSchema);
module.exports=Person;