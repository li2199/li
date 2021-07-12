module.exports = function(req,res){
    // console.log(req)
        // 1、接收前端的数据
        let cityid = req.query.cityid;
        // 2、查询数据库
        // 3、响应
        // res.setHeader("Conent-type","text/plain");
        if(cityid==='All'){
          res.json(
            [
              {
                "cityid": 1,
                "city": "北京"
              },
              {
                "cityid": 2,
                "city": "西安"
              },
              {
                "cityid": 3,
                "city": "上海"
              },
              {
                "cityid": 4,
                "city": "太原"
              },
              {
                "cityid": 5,
                "city": "广州"
              },
              {
                "cityid": 6,
                "city": "深圳"
              },
              {
                "cityid": 7,
                "city": "南京"
              },
              {
                "cityid": 8,
                "city": "武汉"
              },
              {
                "cityid": 9,
                "city": "郑州"
              },
              {
                "cityid": 10,
                "city": "开封"
              },
              {
                "cityid": 11,
                "city": "运城"
              },
              {
                "cityid": 12,
                "city": "西双版纳"
              },
              {
                "cityid": 13,
                "city": "成都"
              },
              {
                "cityid": 14,
                "city": "咸阳"
              }
            ]
                )
                                
        }else{
            res.json({
                status: "fail"
            }) 
        } 
      }
