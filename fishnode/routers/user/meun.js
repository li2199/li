module.exports = function(req,res){
    // console.log(req)
        // 1、接收前端的数据
        
        // 2、查询数据库
        // 3、响应
        
        if(req){
          res.json([
            {
              name: "美食",
              img: "01.jpg",
              url: "",
            },
            {
              name: "景点",
              img: "02.jpg",
              url: "",
            },
            {
              name: "酒店",
              img: "03.jpg",
              url: "",
            },
            {
              name: "休闲",
              img: "04.jpg",
              url: "",
            },
            {
              name: "电影",
              img: "05.jpg",
              url: "",
            },
            {
              name: "美团外买",
              img: "06.jpg",
              url: "",
            },
            {
              name: "美发",
              img: "01.jpg",
              url: "",
            },
            {
              name: "拍照",
              img: "02.jpg",
              url: "",
            },
            {
              name: "洗浴",
              img: "03.jpg",
              url: "",
            },
            {
              name: "密室",
              img: "04.jpg",
              url: "",
            },
            {
              name: "KTV",
              img: "05.jpg",
              url: "",
            },
            {
              name: "足疗",
              img: "06.jpg",
              url: "",
            },
            {
              name: "乐园",
              img: "01.jpg",
              url: "",
            },
            {
              name: "宠物",
              img: "02.jpg",
              url: "",
            },
            {
              name: "逛街",
              img: "03.jpg",
              url: "",
            },
            {
              name: "鲜花",
              img: "04.jpg",
              url: "",
            },
            {
              name: "菜谱",
              img: "05.jpg",
              url: "",
            },
            {
              name: "机票",
              img: "06.jpg",
              url: "",
            },
            {
              name: "结婚",
              img: "01.jpg",
              url: "",
            },
            {
              name: "机票",
              img: "06.jpg",
              url: "",
            }]
           )
                                
        }else{
            res.json(
                'no data'
            ) 
        } 
      }