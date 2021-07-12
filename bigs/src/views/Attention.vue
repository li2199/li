<template>
  <div class="box">
    <div class="header">
      <Back />
      <div class="title">
        <img :src="data.users.head" />
        <p class="home" v-text="data.users.uname"></p>
      </div>
      <p class="pay">关注{{ data.cnum }}</p>
      <van-icon name="share-o" class="share"/>
      <!-- <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
      /> -->
    </div>
    <div class="image">
      <div class="banner">
        <van-swipe @change="onChange">
          <van-swipe-item v-for="i in data.imgsList"
            ><img :src="i.imgurl"
          /></van-swipe-item>

          <template #indicator>
            <div class="custom-indicator">
              {{ current + 1 }}/{{ data.imgsList.length }}
            </div>
          </template>
        </van-swipe>
      </div>
      <!-- <img v-for="i in data.imgsList" :src="i.imgurl" /> -->
      <p class="text" v-text="data.users.synopsis"></p>
      <p class="text1" v-text="data.details"></p>
    </div>
    <div class="mark">
      <van-rate v-model="value" class="done" />
    </div>
    <div class="taste">
      <p>口味:{{ data.eval.score }}</p>
      <p>环境:{{ data.eval.taste }}</p>
      <p>服务:{{ data.eval.nevir }}</p>
      <p>性价比:{{ data.eval.serve }}</p>
    </div>
    <div class="epigraphy">
      <img :src="data.shops.img" class="img1"/>
      <p class="hot">{{ data.shops.sname }}</p>
      <van-rate v-model="value" class="grade" />
      <span  @click="light" class="star"><img src="@/assets/ha6.png" v-show="wit"> <img src="@/assets/ha7.png" v-show="red"></span>
      <p class="number">1/3</p>
      <p class="dalian">{{ data.shops.address }}</p>
      <van-divider class="wire" />
      <p class="draw">预订电话：{{ data.shops.tel }}</p>

      
    </div>
    <div class="comments">
      <p class="area">评论</p>
      <div class="head"><img src="@/assets/img/9.jpg" alt="" /><input type="text" placeholder="说点什么吧……" class="talk" /></div>
      <div v-for="i in coList" class="tex"> 
        <h1 v-text="i.content"/>
        <p >{{i.date}}<input type="button" value="回复"></p>
    </div>
    
     <div v-if='coList.length==0'><img src="@/assets/img/10.jpg" />
      <p class="exist">发条评论，证明我存在！</p>
         </div> 
    </div>
    <div class="foot">
      <input type="text" placeholder="说点什么吧……" class="talk1" v-model="str" />
      <van-icon name="thumb-circle-o" class="praise" />
      <p class="p1">33</p>
      <van-icon name="star-o" class="llect" />
      <p class="p2">11</p>
      <van-icon name="comment-circle-o" class="note" />
    </div>
  </div>
</template>
<script>
import Back from "@/components/Back";
export default {
  name: "attention",
  components: {
    Back,
  },
  data() {
    return {
      value: 3,
      data: [],
      str:"",
      show:'30px',
      red:'white',
      current: 0,
      wit:true,
      red:false,
      coList:[],
      con:0
      }
 
  },
  methods: {
    onChange(index) {
      //   debugger
      this.current = index;
    },
    back() {
      this.$router.go(-1);
    },
    light(){
      
    this.con++;

     if(this.con%2!=0){
          this.wit=false;
          this.red=true
          
       axios({
            url:"http://localhost:9000/collectShops/insertShops",
            method:"post",
            data:{
                "csid": this.data.shops.cityid,
                "sid":this. data.shops.sid,
                "uid":sessionStorage.getItem('user'),
            }

        }).then(res=>{
          console.log(res)
          if(res.data.msg == "success" && res.data.code == "200"){
            alert('收藏成功')
          } 
        })
     }else{ this.red=false
            this.wit=true
        axios({
            url:"https://www.fastmock.site/mock/740291a5ced1904236693a22a36d305c/home/test",
            method:"get",
            data:{
                "csid": this.data.shops.cityid,
            }

        }).then(res=>{
          
          if(res.data.msg == "success" && res.data.code == "200"){
            alert('取消成功');
            

          } 
        })
     }
        

    },
    send(){
      this.show='show';
      axios({
      url: "http://localhost:9000/comments/addCom",
      method: "get",
      
      data:{
            cnid:1,
            content: this.str,
            date:new Date().getDate,
            nid: 0,
            uid: sessionStorage.getItem('user')
    }
    }).then((res) => {
    
      console.log(res.data.data);
    });
    }
  },
  created() {
    axios({
      url: "http://localhost:9000/notes/selectNoteDTO/"+this.$route.query.nid,
      method: "get",
      }).then((res) => {
      this.data = res.data.data;
      this.coList=res.data.data.coList
      console.log(res.data.data.coList);
      console.log(this.data.shops)
    });
  },
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 6.2rem;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
  color: white;
}
.img1{
  width: 0.85rem;
  height: 1rem;
  margin-top: .03rem;
}
.banner {
  width: 100%;
  height: 297px;
  position: relative;
  top: 50px;
}
.tex h1{font-size: .16rem;}
.tex{width:90%;height:0.8rem;color:grey;margin: 0.5rem auto;background-color: wheat;font-size: .14rem;}
.tex p{width: 100%;height:50%;align-items: center;display: flex;justify-content: space-between;}
.tex input{width: 20%;height: 100%;border-radius: .2rem;}
.header {
  width: 100%;
  height: 0.5rem;
  /* background-color: rgb(228, 155, 155); */
  position: fixed;
  top: 0;
  background-color: #fff;
  text-align: center;
  display: flex;
  z-index: 999;
}
.title {
  width: 40%;
  height: 100%;
  margin-left: 0.1rem;
  display: flex;
  align-items: center;
}
.header img {
  width: 0.3rem;
  height: 0.3rem;
  margin: 0.1rem 0.1rem;
}

.header .pay {
  width: 80px;
  height: 25px;
  color: orange;
  /* background-color: #dfdfe1; */
  border: orange 1px solid;
  border-radius: 50px;
  padding-top: 4px;
  position: absolute;
  left: 240px;
  top: 8px;
}
.header .share {
  font-size: 30px;
  position: absolute;
  left: 327px;
  top: 10px;
}
.image {
  width: 100%;
  height: 297px;
}
.image img {
  width: 100%;
  height: 256px;
}
.image .text {
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
}
.image .text1 {
  text-align: left;
  word-wrap: break-word;
}
.mark {
  position: absolute;
  left: 0px;
  top: 570px;
  display: flex;
}
.mark p {
  font-size: 18px;
}
.done {
  font-size: 28px;
  margin-left: 10px;
}
.taste {
  display: flex;
  position: absolute;
  top: 600px;
}
.taste p:nth-child(1) {
  margin-left: 0px;
}
.taste p:nth-child(2) {
  margin-left: 10px;
}
.taste p:nth-child(3) {
  margin-left: 10px;
}
.taste p:nth-child(4) {
  margin-left: 10px;
}
.epigraphy {
  width: 97%;
  height: 107px;
  border: 1px solid grey;
  border-radius: 20px;
  position: absolute;
  top: 638px;
  left: 3px;
}

.epigraphy .hot {
  font-size: 18px;
  position: absolute;
  left: 91px;
  top: 12px;
}
.epigraphy .grade {
  font-size: 20px;
  position: absolute;
  left: 91px;
  top: 40px;
}
.epigraphy .dalian {
  position: absolute;
  left: 91px;
  top: 64px;
  font-size: 0.12rem;
  color: gray;
}
.epigraphy .star {
  position: absolute;
  left: 300px;
  top: 40px;
 width: .2rem;
 height: .2rem;
 
 display: inline-block;

}
.star img {
 width: 100%;
 height: 100%;
}
.epigraphy .number {
  position: absolute;
  left: 325px;
  top: 42px;
}
.epigraphy .wire {
  color: rgb(214, 68, 68);
  position: absolute;
  top: 100px;
}
.epigraphy .draw {
  height: 20px;
  position: absolute;
  top: 84px;
  left: 91px;
}
.epigraphy .tickets {
  position: absolute;
  top: 99px;
  left: 46px;
  color: grey;
}
.epigraphy .img {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 135px;
  left: 17px;
  border-radius: 10px;
}
.epigraphy .adult {
  position: absolute;
  top: 133px;
  left: 70px;
}
.epigraphy .money {
  position: absolute;
  top: 157px;
  left: 70px;
  color: orangered;
}
.epigraphy .sold {
  position: absolute;
  top: 157px;
  left: 263px;
  color: grey;
}
.comments {
  width: 100%;
  height: 350px;
  position: relative;
  top: 463px;
  left: 0;
  text-align: left;
}
.comments .area {
  font-size: 20px;
}
.comments .head {
  width: 35px;
  height: 35px;
  background-color: #dfdee3;
  border-radius: 50px;
  position: relative;
  position: absolute;
  left: 7px;
  top: 29px;
  border: 1px solid rgb(199, 197, 197);
}
.comments .head img {
  position: absolute;
  left: 7px;
  top: 9px;
}
.comments .talk {
  width: 300px;
  height: 30px;
  border-radius: 20px;
  position: absolute;
  left: 56px;
  top: 1px;
  background-color: #dfdee3;
  border: 1px solid rgb(199, 197, 197);
}
.comments img {
  position: absolute;
  left: 134px;
  top: 151px;
}
.comments .exist {
  position: absolute;
  left: 102px;
  top: 267px;
}
.foot {
  position: fixed;
  left: 0px;
  bottom: 0px;
  background-color: #fff;
  width: 100%;
  height: 50px;
}
.foot .talk1 {
  width: 200px;
  height: 30px;
  border-radius: 20px;
  position: absolute;
  left: 12px;
  top: 9px;
  background-color: #dfdee3;
  border: 1px solid rgb(199, 197, 197);
}
.foot .praise {
  font-size: 30px;
  position: absolute;
  left: 235px;
  top: 12px;
}
.foot .llect {
  font-size: 28px;
  position: absolute;
  left: 286px;
  top: 12px;
}
.foot .note {
  font-size: 30px;
  position: absolute;
  left: 334px;
  top: 12px;
}
.foot .p1 {
  position: absolute;
  left: 265px;
  top: 25px;
}
.foot .p2 {
  position: absolute;
  left: 314px;
  top: 25px;
}
</style>

