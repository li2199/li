<template>
    <div class="box">
        <div class="top">
         <div class="rest" @click="back()">取消</div>
         <div class="tag">发笔记<img src="@/assets/d2_.png" ></div>
         <div class="save"> <span @click="save(0)">保存</span><p @click="save(1)">发布</p></div>   
        </div>
        <div class="photo">
            <van-uploader :after-read="onRead" accept="image/*" multiple :max-count="5" style="width:100%;height:100%;" v-model="fileList">
　　　　 <img src="@/assets/hsv.png" class="upimg ">
　　    </van-uploader>   
        </div>
        <div class="input"><input type="text" placeholder="写个标题吧..." maxlength="30" v-model="title">{{this.$route.query.name}}</div>
        <div class="inputtet"><textarea class="tex" placeholder="写点什么吧！" v-model="tet"></textarea></div>
        <div class="bot"> <p>关联商户/地点</p> <p @click="shows">去选择 <img src="@/assets/v.png" ></p></div>
        <div class="city" v-show="show">
        <select v-model="val" @change="checkcity()">
          <option v-for="(value,key) in citys"  v-text="value.city" ></option>
        </select>
        <select v-model="store" @change="checkstore()">
          <option v-for="(value,key) in stores"  v-text="value.sname"></option>
        </select>
      </div>
    </div>
</template>
<script>
import {get,post} from "@/Api/api";
export default {
    name:"Add",
     data(){
        return{
            val:'',
            show:false,
            citys:[],
            store:'',
            stores:[],
            str:true,
            imgs:[],
            fileList: [],
            title:'',
            tet:''   ,
            id:''
    }
     },
    methods:{
        back(){
            this.$router.go(-1)
        },
        shows(){
       get("http://localhost:9000/cityid?cityid=All") .then(res=>{
          this.citys=res;
          this.show=true;
        } ) },
        onRead(file) {
          let obj={};
       obj.src=file.content
        this.imgs.push(obj);
        console.log(this.imgs)
       
},
checkcity(){
          for(let i in this.citys){
           if(this.citys[i].city==this.val){
             this.id= this.citys[i].cityid  
           }
         };
    
    post('http://localhost:9000/getshops',{cityid:this.id}).then(res=>{
      if(res.length==0){
        this.stores=[{sname:'暂时没有店铺'}]
      }else{
        this.stores=res
      }
    }
          
    )
    },
 checkstore(){
console.log(this.store)
    },
save(status){
  if(this.imgs.length!=0){
    axios({
      url:'http://localhost:9000/addtitle',
      method:'post',
      data:{
             title:this.title,
              details:this.tet,
              img:this.imgs,
              sname:this.store,
              status:status,
              uid:sessionStorage.getItem('user'),
             cityid:this.id 
            }
    }).then(res=>{
      if(res.data.status == "success"){
        status=="0"?alert('保存成功'):alert('发布成功')
        this.$router.push('/')
      }
    })
  }else{
     alert('请上传图片')
    
  }
   
}
    },
}
</script>
<style scoped>
.box{width: 100%;height: 6.6rem;}
.tag{width: 22%;height: 100%;font-size: 18px;padding-left: 0.5rem;}
.tag img{width: 0.15rem;height: 0.15rem;padding-left: 0.05rem;}
.top{width: 90%;height: 0.25rem;margin:auto;display: flex;justify-content: space-between;padding-top: 0.2rem;}
.rest{width: 10%;height: 100%;font-weight: bold;}
.save{width:32%;height: 100%;}
.save span{font-weight: bold;}
.save p{display: inline-block;width: 60%;height: 90%;border-radius: 0.3rem;margin-left: 0.1rem;background-color:orange;color: white;text-align: center;line-height: .25rem;}
.photo{width: 90%;margin: auto;display: flex;margin-top: 0.3rem;}
.same{width: 48%;height: 80%;background: url(../assets/hss.png)no-repeat;}
.photo img{width: 100%;height: 100%;}
.photo p:last-child{margin-left: 0.15rem;}
.input{width: 90%;height: 0.4rem;margin:0.2rem auto;border-bottom: 0.01rem solid;}
.input input{width: 100%;height: 90%;border: none;outline: none;}
.inputtet{width: 90%;height:30%;margin: auto;border: 0.01rem solid;}

.tex{width: 90%;height: 80%;padding: 0.1rem 0 0 0.1rem;border: none;outline: none;}
.bot{width: 90%;height: 5%;margin:0.25rem auto 0;display: flex;justify-content: space-between;}
.bot p{width: 50%;height: 100%;font-weight: bold;display: flex;align-content: center;}
.bot p:nth-child(2){font-weight: unset;justify-content: flex-end;color: #999;}
.bot img{height: 75%;margin-left: 0.1rem;}
.city {
  width: 90%;
  height: 0.4rem;
  margin: auto;
  
}
select {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: -0.1rem;
  border: none;
  outline: none;
  float: right;
}
select:nth-child(2){
     width: 1.6rem;
     margin-right: 0.1rem;
     text-align: center;
}
</style>