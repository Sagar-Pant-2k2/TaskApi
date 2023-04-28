require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const taskRoute = require('./routes/crud');
const cors = require('cors');
const port = process.env.port||3000;
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const app = express();

app.use(cors())
app.use(bodyParser.json());

app.use('/api/v1/db',taskRoute);
// console.log(proceconnectionString);
console.log(process.env.connectionString)
const x = async ()=>{
    try{
        await mongoose.connect(process.env.connectionString);
        
        app.listen(port,()=>{
            console.log("db connected \nlistening at port 3000");
        });
        
    }
    catch(err){
        console.log('error while connecting to db' + err);
    }
    
} 

x();



