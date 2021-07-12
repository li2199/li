module.exports = function(req,res){
    // console.log(req)
        // 1、接收前端的数据
        
        // 2、查询数据库
        // 3、响应
        
        if(req){
          res.json([
            {
              "img": "/img/apple.png",
              "uname": "ndasdao",
              "hsrc": "apple.png",
              "title": "asdahaha",
              "zansrc": "hf0.png"
            },
            {
              "img": "/img/apple.png",
              "uname": "ndasdao",
              "hsrc": "apple.png",
              "title": "asdahaha",
              "zansrc": "hf0.png"
            },
            {
              "img": "/img/apple.png",
              "uname": "ndasdao",
              "hsrc": "apple.png",
              "title": "asdahaha",
              "zansrc": "hf0.png"
            },
            {
              "img": "/img/apple.png",
              "uname": "ndasdao",
              "hsrc": "apple.png",
              "title": "asdahaha",
              "zansrc": "hf0.png"
            },
            {
              "img": "/img/apple.png",
              "uname": "ndasdao",
              "hsrc": "apple.png",
              "title": "asdahaha",
              "zansrc": "hf0.png"
            },
            {
              "img": "/img/apple.png",
              "uname": "ndasdao",
              "hsrc": "apple.png",
              "title": "asdahaha",
              "zansrc": "hf0.png"
            },
            {
              "img": "/img/apple.png",
              "uname": "ndasdao",
              "hsrc": "apple.png",
              "title": "asdahaha",
              "zansrc": "hf0.png"
            }
          ]
           )
                                
        }else{
            res.json(
                'no data'
            ) 
        } 
      }