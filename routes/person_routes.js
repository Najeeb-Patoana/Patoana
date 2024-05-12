const express = require('express')
const Person = require('../models/Person.js');
const router = express.Router();
router.post('/', async (req, res) => {

    try {
        const data = req.body//assume that request body contain the person data

        const New_person = new Person(data);

        const response = await New_person.save();
        console.log("Data is saved");
        res.status(200).json(response);//200 means success 

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Errorr" })//500 server error
    }
})

router.get('/', async (req, res) => {
    try {
        const fetched = await Person.find();//await because it may take sometime to find data form database

        console.log("Data is fetched");
        res.status(200).json(fetched);//200 means success 

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Errorr" })//500 server error
    }
})
router.get('/:worktype', async (req, res) => {//nested url parameters
    try {

        const worktype = req.params.worktype;//to get parameter (worktype) from url

        if (worktype == 'chef' || worktype == 'worker' || worktype == 'manager' || worktype == 'employee') {
            const fetched = await Person.find({ work: worktype });//search from mongodb documents using .find method
            console.log("Data is fetched");
            res.status(200).json(fetched);//200 means success 
        } else {
            res.status(404).json(`{${worktype}:"Not Found"}`)
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Errorr" })//500 server error
    }
})
router.put('/:id', async (req, res) => {//nested url parameters
    try {
        const id = req.params.id;//to get parameter (id) from url
        const updated_data = req.body;
        const fetched = await Person.findByIdAndUpdate(id, updated_data, {
            new: true,
            runValidators: true
        })//search from mongodb documents using .findByIdAndUpdate method

        if (!fetched) {
            res.status(404).json(`{${id}:"Not Found"}`)
        }
        console.log("Data is updated");
        res.status(200).json(fetched);//200 means success 
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Errorr" })//500 server error
    }
})

router.delete('/:id', async (req, res) => {//nested url parameters
    try {

        const id = req.params.id;//to get parameter (id) from url
        const fetched = await Person.findByIdAndDelete(id)//delete from mongodb documents using .findByIdAndDelete method
        if (!fetched) {
            res.status(404).json(`{${id}:"Not Found"}`)
        }
        console.log("Data is Deleted");
        res.status(200).json({message:"Data deleted successfully"});//200 means success 
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Errorr" })//500 server error
    }
})

module.exports = router;