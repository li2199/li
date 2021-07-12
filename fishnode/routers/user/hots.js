module.exports = function(req,res){
    // console.log(req)
        // 1、接收前端的数据
        let hots = req.query.hots;
        // 2、查询数据库
        // 3、响应
        
        if(hots==='All'){
          res.json([
            "龙虾",
            "皮皮虾",
            "迪士尼"
          ])
                                
        }else{
            res.json([
                "美食",
                "推荐",
                "热门"
              ]) 
        } 
      }