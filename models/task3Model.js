var mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId
    },
    firstName:{type:String},
    email:{type:String},
    password:{type:String}
})

exports.model = mongoose.model("users", userSchema)