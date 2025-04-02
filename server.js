const express = require('express');
const app = express();
const db  =  require('./db');
require('dotenv').config();
const Todo = require('./models/Todo');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//import routes file
const todoRoutes = require('./Routes/todoRoutes');
//use the routers
app.use('/todos' , todoRoutes);

app.get('/', function(req, res){
    res.send("Welcome to My TODO App ");
});


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{console.log('listening on port 3000')});