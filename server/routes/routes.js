const express = require('express');

const router = express.Router()
const User = require("../model/userSchema");
var bodyParser = require('body-parser')
router.use(express.json())

//Post Method
router.post('/post', (req, res) => {
    res.send('Post API')
})

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.put('/update/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const updatedData = req.body;
        // const options = { new: true };
        console.log(req.body)

        const result = await User.findByIdAndUpdate(
            id, updatedData
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;