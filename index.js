const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const noteRouter = require('./route/noteRouter');

// parsing x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
// parsing json files
app.use(bodyParser.json());

app.use('/api/v1',noteRouter)

app.get('/',(req,res,next)=>{
    res.send("server started ............");
})

app.listen(3000,()=>{
    console.log("server is running ............");
})