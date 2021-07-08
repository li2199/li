const fs = require("fs");
module.exports = function(req,res){
 
        if(req){
            fs.readFile('./data/users.txt','utf-8',function (err, data){
              if (err) {
                console.log(err);
            } else {
                let arr = data.split(',\n');
                let result = [];
                arr.forEach(item => {
                    if (item) {
                        result.push(JSON.parse(item))
                    }
                })
               
                res.json(result)  
            }
            })
        
                       
        }else{
            res.json({
                status: "fail"
            }) 
        } 
      }