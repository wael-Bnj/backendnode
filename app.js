//importing modules
 const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');  

//Init express
const app = express();

const route =require('./routes/route');

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/mybase", { useNewUrlParser: true });

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb @ 27017')
});

mongoose.connection.on('error',(err)=>{
    if(err){  
    console.log('error to database Connection'+err);
    }
});

//port no
const port = 3000;

//adding middleware
app.use(cors());

//body-parser

app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api',route);

//testing server
app.get('/',(req,res)=>{
    res.send('wael boumenjel')
});

//Listen on port
app.listen(port, () => console.log('API running on localhost:'+port));