const fs = require("fs");
module.exports = function(req,res){
        if(req){
            
            let cityid=req.body.data.cityid;
            fs.readFile('./data/shops.txt','utf-8',function (err, data){
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
                let shopdata=[]
                result.forEach(i => {
                  if(i.cityid==cityid&&i.status=="reviewed"){
                    shopdata.push(i)
                  }
                  
                });
             res.json(
                shopdata
                    )
                   
            }})
           
      }
    }