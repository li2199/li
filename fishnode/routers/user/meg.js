const fs = require("fs");
module.exports = function(req,res){
 
        if(req){
            
            fs.readFile('./data/megs.txt','utf-8',function (err, data){
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
                let read=[];
                let notread=[];
               result.forEach(i=>{
                   if(i.status==1){
                    read.push(i)
                   }else{
                    notread.push(i)
                   }
               });
            req.query.status==1? res.json(read):res.json(notread)
                 
            }
            })
        
                       
        }else{
            res.json({
                status: "fail"
            }) 
        } 
      }