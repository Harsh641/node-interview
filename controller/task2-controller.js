const e = require("express")
const store = require('data-store');
const request = require('request');

exports.function2 = function(req, res){

    request('https://reqres.in/api/users', { json: true }, (err, res, body, data) => {
        if (err){ 
            return console.log(err); 
        }
        console.log(body.data);
    });

    res.json({msg:"User gets", data:data, status:200});

    task3Model.find(function(err, data){
        if(err){
            res.json({msg:"No User Found", data:err, status:-1})
        }
        else{
            res.json({msg:"Data Retreived", data:data, status:200})
            userModel.findOne({
                _id:{
                    $eq: req.body.userId
                }
            }, function(err, data){
                if(err){
                    res.json({msg: "No User Found", data:req.body, status:-1})
                }
                else{
                    userModel.updateOne({id:req.body.userId}, {$set:{jobTitle: req.body.jobTitle}}, function(err, data){
                        if(err){
                            res.json({msg: "Something Went Wrong", data: err})
                        }
                        else{
                            if(data.matchedCount == 0){
                                res.json({msg:"User Not Found"})
                            }
                            else{
                                res.json({msg: "User Updated", data: data, status:200})
                            }
                        }
                    })
                    userModel.deleteOne({_id: req.params.userId}, function(err, data){
                        if(err){
                            res.json({msg: "Something Went Wrong", data: err, status:-1})
                        }
                        else{
                            res.json({msg: "User Deleted", data: data, status:200})
                        }
                    })
                }
            })
        }
    })
}