const fs = require("fs");
module.exports = function(req,res){
    let obj=req.body
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
            let newdata= result;
            
            newdata.forEach(i=>{
                if(i.name==obj.name){
                    i=obj
                } 
            }) 
           let users=newdata;
           let newarr=[];
           users.forEach(data=>{
               if(data){
                 newarr.push( JSON.stringify(data)+',\n')   
               }
            
           })
           
         let str=newarr.join(',\n')
          
             
            fs.writeFile('./data/users.txt',str,(e)=>{
                if(e){
                    console.log('写入失败')
                }else{
                     res.json({
                    status:200
          }     
             )  
                }
        }) 
        }
        })
    
                  
    }else{
        res.json({
            status: "fail"
        }) 
    }
  }