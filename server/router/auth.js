const express = require('express');
const router = express.Router();

const cookieParser = require("cookie-parser");
router.use(cookieParser());




require('../db/conn');
const User = require("../model/userSchema");

//register route

router.post('/register', async (req, res) => {

    const { name, email, phone, day, month, year, timetaken } = req.body;

    if(!name || !email || !phone || !day || !month || !year)
    {
        return res.status(422).json({ error: "Please fill all the fields properly" });
    } 

        const user = new User({name, email, phone, day, month, year });

        //hashing

        await user.save();

        res.status(201).json({ message:"User Successfully Registered!" })


});


router.post('/timetaken', async (req, res) => {

});



module.exports = router;