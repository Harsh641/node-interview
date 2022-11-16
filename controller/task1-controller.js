const e = require("express")

exports.noFunction = function(req, res){

    let result;
    
    for(let i = 0; i <= 20; i++){
        if(i % 3 == 0){
            result += " Fizz";
        }
        else if(i % 5 == 0){
            result += " Buzz";
        }
        else if(i % 15 == 0){
            result += " FizBuz";
        }
        else{
            result += i;
        }
    }
    res.json({msg:"User Saved", data:result, status:200})
    // return result;
}

