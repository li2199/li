const fs = require("fs");
module.exports = function(req,res){
    
        if(req){
            
            let username=req.body.username;
            let psd=req.body.userpassword;
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
            if( result.some(i=>i.username==username&&i.userpassword==psd)){
                res.json({
                    status:'success'})
            }else{
                res.json({status:'err'})
            } 
            }
            })            
        }
      }