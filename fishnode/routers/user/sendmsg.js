const fs = require("fs");
module.exports = function(req,res){
        if(req){
            let obj=msg();
        fs.writeFile('./data/msg.txt',obj,(e)=>{
                if(e){
                    console.log('写入失败')
                }else{
        res.json({
            status:'success',
            code:obj
        })
      }
                })
            }else{
                res.json({
                    status:'err'
                })
            }  
          
function msg(){
     let str='';
    for(let i=0; i<6;i++){
    str+= parseInt(Math.random()*10) 
    }
   return str 
}

}