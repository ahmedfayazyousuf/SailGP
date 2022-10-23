const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const authenticate = require("./middleware/authenticate");

dotenv.config({path: './config.env' });

require('./db/conn');
const User = require('./model/userSchema');

app.use(express.json()); 

//linking router files to make routing easy
app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000;






app.get('/formbuilder', (req, res) => {
    //res.send(`Hello world from the FORMBUILDER server`);
});

app.get('/login', (req, res) => {
    res.send(`Hello world from the LOGIN server`);
});

app.get('/signup', (req, res) => {
    //res.send(`Hello world from the SIGNUP server`);
});
 


app.post("/timetaken",(req,res) =>{

    Admin.find({}, function(err, admin) {
        console.log(admin);

        time = admin[0].Time;
        const NameData = new Movie({User:req.body.Name,Score:0});
    console.log(req.body);
    NameData.save().then((movie) => {
        // console.log(movie.id);
        // name = movie.Name;
    }).catch(err => {
        res.status(400).send("unable to save to database");
      });
      name = NameData._id;
      user = NameData.User;
      res.render("game",{time:time});
    });

    
      
})




app.get("/l",(req,res) =>{
    // console.log(name)
    User.find({"timetaken":{$ne : 0}}, function(err, users) {
        // console.log(name);
        // console.log(score);
        res.render('leaderboard', {
            usersList: users,
            time: timetaken,
            usera:user
        })
    }).sort({Score : -1}).limit(5);
})



app.listen(PORT, () => {    
    console.log(`The Server is running on port ${PORT}`);
})
