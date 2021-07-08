const fs = require("fs");

module.exports = function(req,res){
        if(req){
        let key=req.body.code;
        fs.readFile('./data/msg.txt','utf-8',function (err, data){
            if (err) {
              console.log(err);
          } else {
              if(key==data){
                let obj={};
                obj.usertel=req.body.usertel;
                obj.userpassword=req.body.userpassword;
                obj.username=req.body.username;    
            fs.appendFile('./data/users.txt',(JSON.stringify(obj)+',\n'),(e)=>{
                    if(e){
                        console.log('写入失败')
                    }else{
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
    

        })}


    }

 