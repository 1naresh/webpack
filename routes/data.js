var express=require('express')
var mongoose=require('mongoose')
var router =express.Router()
var schema=new mongoose.Schema({
    amount:Number,
    bedRoomSize:Number,
    bedroomCost1:Number,
    bedroomCost2:Number,
    bedroomType:String,
    bedwallA:Number,
    bedwallB:Number,
    bedwallC:Number,
    city:String,
    email:String,
    interiors:[],
    kitchenCost1:Number,
    kitchenCost2:Number,
    kitchenShape:String,
    kitchenSize:Number,
    kitchenwallA:Number,
    kitchenwallB:Number,
    kitchenwallC:Number,
    name:String,
    phone:String,
    products:[],
})
var customer=mongoose.model('customer',schema)
router.post('/save',function(req,res){
    customer.create(req.body,function(err,post){
        if(err){
            console.log(err)
        }
        res.send(post)
    })
})
router.get('/getByPhone/:phone', function (req, res, next) {
    customer.findOne({ phone: req.params.phone }, function (err, data) {
        res.send(data);
    });
});
router.get('/customers',function(req,res){
    customer.find({},function(err,data){
        if(err){
            console.log(err)
        }
        res.send(data)
    })
})
module.exports=router; 