var express=require('express')
var mongoose=require('mongoose')
var request =require("request");
var user=require('../models/user')
var router =express.Router()

router.post('/save',function(req,res){
    user.create(req.body,function(err,post){
        if(err){
            console.log(err)
        }
        res.send(post)
    })
})
router.get('/getByPhone/:phone', function (req, res, next) {
    user.findOne({ phone: req.params.phone }, function (err, data) {
        res.send(data);
    });
});
router.get('/customers',function(req,res){
    user.find({},function(err,data){ 
        if(err){
            console.log(err)
        }
        res.send(data)
    })
})
router.get("/sendOtp/:phone",function(req,res,next){
    var phone = req.params.phone
    var otp=Math.round(Math.random() * 1000000); 
    otp=String(otp)
    var url='http://bhashsms.com/api/sendmsg.php?user=madhava&pass=Reddy123&sender=BMBOTP&phone='+phone+'&text='+otp+'&priority=ndnd&stype=normal'
    request(url, function (error, response, body) {
        if(error){
            console.log(err)
        }
        console.log("otp sent")
        res.send(otp)
    });
})
router.put('/update',function(req,res){
    user.findByIdAndUpdate(req.body.id,req.body,function(err,data){
        if(err){
            console.log(err)
        }
        res.send("success")
    })
})
module.exports=router; 