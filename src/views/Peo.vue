<template>
  <div class="box">
    <div class="header">
      <Top />
    </div>
    <div class="msg">
      <p class="p1"><img :src="data.head" /></p>
      <div class="right">
        <div class="mid-top" v-text="data.uname"></div>
        <div class="mid">
          <p v-text="data.city" class="p2"></p>
          <p class="p3"><img src="../assets/32.jpg" />{{ data.medal }}枚</p>
        </div>
        <div class="bot" v-text="data.synopsis"></div>
      </div>
    </div>
    <div class="nav">
      <li>
        <h3 v-text="data.follow"></h3>
        <span>粉丝</span>
      </li>
      <li>
        <h3 v-text="data.follow"></h3>
        <span>关注</span>
      </li>
      <li @click="show">
        <h3> 132</h3>
        <span> 总浏览量 </span>
      </li>
      <li @click="count">
        <h3 >54</h3>
        <span>近30天笔记浏览量</span>
      </li>
    </div>
    <div class="cao">
      <div class="cao1">
        <img src="../assets/33.jpg" />
        <p class="p4">草稿箱</p>
      </div>
      <div class="cao2">{{ data.medal }}篇草稿&nbsp;&gt;</div>
    </div>
    <div class="div1">
      <van-tabs v-model="active">
        <van-tab title="动态"><Show :wth='wth' :shows='shows'/></van-tab>
        <van-tab title="笔记"><Show :wth='wth' :shows='shows1'/></van-tab>
        <van-tab title="相册"><Show :wth='wth' :shows='shows2'/></van-tab>
        <van-tab title="地点"><Show :wth='wth' :shows='shows3'/></van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import Top from "@/components/Top";
import Show from "@/components/Show";
export default {
  components:{
    Top,Show
  },
  
  data() {
    return {
      data:[],
      str:'添加个人简介，让大家更好的认识你',
      active:'',
      wth:'100%',
      shows:[],
       shows1:[],
        shows2:[],
         shows3:[],
      
  }},
  created(){
    axios({
      url:'http://10.12.151.28/OwnPage/getNotesByUid/1',
      methods:'get',
    }).then(res=>{
      this.data=res.data.data
    });
    axios({
      url:'https://www.fastmock.site/mock/740291a5ced1904236693a22a36d305c/home/food',
      methods:'get',
    }).then(res=>{
      this.shows=res.data
    });
     axios({
      url:'https://www.fastmock.site/mock/740291a5ced1904236693a22a36d305c/home/food1',
      methods:'get',
    }).then(res=>{
      this.shows1=res.data
    });
     axios({
      url:'https://www.fastmock.site/mock/740291a5ced1904236693a22a36d305c/home/food2',
      methods:'get',
    }).then(res=>{
      this.shows2=res.data
    });
     axios({
      url:'https://www.fastmock.site/mock/740291a5ced1904236693a22a36d305c/home/food3',
      methods:'get',
    }).then(res=>{
      this.shows3=res.data
    });
  },
  methods:{
    show(){
      this.$dialog.alert({
      title: '总浏览量',
      message: '·所有内容累计获浏览量<br>代表所有内容历史累计获得的全站浏览量，每天中午12点后更新昨日数据',
      theme: 'round-button',
    }).then(() => {
      close
    });
    },
    count(){
      this.$dialog.alert({
      title: '近30天笔记数据',
      message: '·近30天新发布笔记数<br>·获得浏览量<br>每天中午12点后更新昨日数据,可在我的-笔记达人中心查看,了解笔记',
      theme: 'round-button',
    }).then(() => {
      close
    });
    }
  }
  
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 0.42rem;
  /* background-color: aquamarine; */
}
.msg {
  width: 100%;
  height: 0.93rem;
  background-color: white;
  display: flex;
}
.p1 {
  width: 0.8rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: #f4f4f4;
  margin-left: 0.13rem;
  position: relative;
}
.p1 img {
  width: 0.46rem;
  height: 0.53rem;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
}
.right {
  height: 0.7rem;
  margin-left: 0.1rem;
}
.mid-top {
  text-align: left;
}
.mid {
  height: 0.2rem;
  display: flex;
  margin-top: 0.06rem;
}
.p2 {
  width: 0.36rem;
  height: 0.16rem;
  background-color: #f6f6f6;
  font-size: 0.1rem;
  text-align: center;
  line-height: 0.16rem;
}
.p3 {
  width: 0.45rem;
  height: 0.16rem;
  background-color: #f6f6f6;
  font-size: 0.1rem;
  margin-left: 0.1rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.bot {
  font-size: 0.12rem;
  margin-top: 0.1rem;
}
.nav {
  width: 100%;
  height: 0.72rem;
  /* background-color: wheat; */
  display: flex;
  justify-content: space-around;
}
li {
  width: 0.56rem;
  height: 0.47rem;
  /* background-color: violet; */
  text-align: center;
}
h3 {
  text-align: center;
}
span {
  font-size: 0.12rem;
  color: gray;
}
.cao {
  width: 100%;
  height: 0.34rem;
  /* background-color: hotpink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cao1 {
  width: 0.63rem;
  height: 0.14rem;
  /* background-color: greenyellow; */
  display: flex;
  justify-content: space-between;
  margin-left: 0.12rem;
}
.p4 {
  font-size: 0.13rem;
  color: grey;
}
.cao2 {
  width: 0.6rem;
  height: 0.15rem;
  /* background-color: indianred; */
  color: grey;
  font-size: 0.13rem;
  margin-right: 0.1rem;
}
.div1 {
  width: 65%;
  margin: auto;
}

</style>