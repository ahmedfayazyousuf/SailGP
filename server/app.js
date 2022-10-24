const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const authenticate = require("./middleware/authenticate");
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors());


const routes = require('./routes/routes');

app.use('/api', routes)
dotenv.config({path: './config.env' });

require('./db/conn');
const User = require('./model/userSchema');

app.use(express.json()); 
app.use(express.urlencoded()); 

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
 



app.listen(PORT, () => {    
    console.log(`The Server is running on port ${PORT}`);
})
