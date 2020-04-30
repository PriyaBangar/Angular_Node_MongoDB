//var angularPart = require('E:\Angular Projects\MyAngular_Node_MongoDB_Project\AngularPart');
//const config = require('./config/config');
const db = require('./models/db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rstIndex = require('./routes/index.routes.js');
const mongoose = require('mongoose');

mongoose.connect(db.DB, { useNewUrlParser: true }).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


var app = new express();
var port = 3000;
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200/signup');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
//var htmlFile = require('E:\Angular Projects\MyAngular_Node_MongoDB_Project\AngularPart\src\index.html');
// app.use("/",(req,res) => {
//   //res.sendFile("E:\Angular Projects\MyAngular_Node_MongoDB_Project\AngularPart\src\index.html");   
//    res.send("Hello World");
// });

//app.use('/api', htmlFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use('/api',rstIndex);
app.listen(port, () =>{
    console.log("successfully connected port" + port);
});

