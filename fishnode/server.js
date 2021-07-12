
const express = require("express");
const bodyParser = require('body-parser') 


// 创建服务器对象
const app = express(); //等价于http.createServer();
app.use(bodyParser.json())
// 监听
app.listen(9000,"localhost",()=>{
    console.log("服务器启动成功……");
})
// 1、静态资源的托管
app.use(express.static('./public'));
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","*");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","*");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})
//客户端

const updateuser = require("./routers/user/updateuser");
const userreg = require("./routers/user/userreg");
const testphone = require("./routers/user/testphone");
const sendmsg = require("./routers/user/sendmsg");
const testuser = require("./routers/user/testuser");
const testlogin = require("./routers/user/testlogin");
const userlogin = require("./routers/user/userlogin");
const cityid = require("./routers/user/cityid");
const hots = require("./routers/user/hots");
const meun = require("./routers/user/meun");
const title = require("./routers/user/title");
const addshop = require("./routers/user/addshop");
const getshops = require("./routers/user/getshops");
const addtitle = require("./routers/user/addtitle");
const gettitle = require("./routers/user/gettitle");
const meg = require("./routers/user/meg");
app.get("/meg",meg)
app.post("/gettitle",gettitle)
app.post("/addtitle",addtitle)
app.post("/getshops",getshops)
app.post("/addshop",addshop)
app.get("/title",title)
app.get("/meun",meun)
app.get("/hots",hots)
app.get("/cityid",cityid)
app.post("/userlogin",userlogin)
app.post("/testlogin",testlogin)
app.post("/testuser",testuser)
app.post("/sendmsg",sendmsg)
app.post("/updateuser",updateuser)
app.post("/userreg",userreg)
app.post("/testphone",testphone)


//后台管理
const loguser = require("./routers/admin/loguser");
const alluser = require("./routers/admin/alluser");
app.post("/alluser",alluser)
app.post("/loguser",loguser)