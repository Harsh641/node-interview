var task3Model = require('../models/task3Model')

exports.addUser = function(req, res){
    
    let u = new task3Model({
        userId:req.body.userId,
        firstName:req.body.firstName,
        email:req.body.email,
        password:req.body.password,
    })
    
    u.save(function(err, data){
        if(err){
            res.json({msg:"Something went wrong", data:err, status:-1})
        }
        else{
            res.json({msg:"User Saved", data:data, status:200})
        }
    })
}

exports.listUsers = function(req, res){
    task3Model.find(function(err, data){
        if(err){
            res.json({msg:"No User Found", data:err, status:-1})
        }
        else{
            res.json({msg:"Data Retreived", data:data, status:200})
        }
    })
}

exports.getUserById = function(req, res){
    task3Model.findOne({_id:req.params.userId}, function(err, data){
        if(err){
            res.json({msg:"Invalid Id", data:err, status:-1})
        }
        else{
            res.json({msg:"User Found", data:data, status:200})
        }
    })
}