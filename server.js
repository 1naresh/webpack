var express=require("express");
var fs=require("fs");
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var data=require('./routes/data')
var app =express();

mongoose.connect('mongodb://localhost/test')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/data',data)

app.get("/",(req,res) => {
    fs.readFile("prodindex.html","utf8",(err,data) => {
        res.send(data)
    })
})
app.get("/script.js",(req,res) =>{
    fs.readFile("build/index..min.js","utf8",(err,data) => {
        res.send(data)
    })
})
app.listen(100,() => console.log("server is listening to port 100"))