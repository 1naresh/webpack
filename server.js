var express=require("express");
var fs=require("fs");
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var users=require('./routes/users')
var app =express();

mongoose.connect('mongodb://localhost/test')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users',users)

app.get("/",(req,res) => {
    fs.readFile("index.html","utf8",(err,data) => {
        res.send(data)
    })
})
app.get("/script.js",(req,res) =>{
    fs.readFile("dist/index.min.js","utf8",(err,data) => {
        // console.log(data)
        res.send(data)
    })
})
app.listen(100,() => console.log("server is listening to port 100"))