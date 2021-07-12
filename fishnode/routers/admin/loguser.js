const fs = require("fs");

module.exports = function(req,res){

        if(req){
            let obj=req.body
            fs.readFile('./data/admin.txt','utf-8',function (err, data){
                if (err) {
                  console.log(err);
              } else {
                let arr = data.split(',\n');
                let result = [];
                arr.forEach(item => {
                    if (item) {
                        result.push(JSON.parse(item))
                    }
                });
                if(result.some(i=>i.name==obj.name&&i.pass==obj.pass))
                res.json({
                    status: "success"
                }) 
                    } }) 
               
            }else{
                res.json({
                    status: "err"
                }) 
            } 
            
}