const fs = require("fs");

module.exports = function(req,res){
        if(req){
       let obj =req.body;
            fs.appendFile('./data/titles.txt',(JSON.stringify(obj)+',\n'),(e)=>{
                    if(e){
                        console.log('写入失败')
                    }else{
                     res.json({
                       status: "success" })   
                    } }) 
               
            }else{
                res.json({
                    status: "err"
                }) 
            } 
            
}
          
    


    

 