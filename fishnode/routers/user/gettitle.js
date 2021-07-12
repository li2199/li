const fs = require("fs");
module.exports = function(req,res){
        if(req){
            let cityid=req.body.cityid;
            fs.readFile('./data/titles.txt','utf-8',function (err, data){
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
                let news=[]
            result.forEach(i=>{
                if(i.cityid==cityid&&i.status=='1'){
                    news.push(i)
                }
            })
            
                    res.json(
                        news
                    )
            }})
           
      }
    }