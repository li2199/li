<template>    
  <div class="box">
    <div class="top">
      <div class="city">
         <select v-model="val" @change="checkcity()">
          <option v-for="(value) in citys"  v-text="value" ></option>
        </select>
      </div>
      <div class="sech"><input type="search" placeholder="全城按摩" /></div>
      <div class="right" @click="showadd()" >
        <img src="../assets/img/ha9.png" />
      </div>
      <div v-show="add" class="add">
        <p><img src="../assets/d5x.png" />扫一扫</p>
        <p @click="fn()"><img src="../assets/hb1.png" />添加商户</p>
      </div>
    </div>
    <HotSearch @titleHadle="titleHadle" :hots='hot'/>
    <div class="some">
      <ul>
        <li v-for="i in somes" @click="to(i.url)">
          <img :src="srcs + i.img" />
          <span>{{ i.name }}</span>
        </li>
      </ul>
      <div class="page">
        <p/>
        <p/>
      </div>
    </div>
    <HotSearch @titleHadle="titleHadle" :flag="false" :hots='hots'/>
    <Shows :shows='shows'/>
    <Footer></Footer>
  </div>
</template>
<script>
import HotSearch from "@/components/Hots";
import Shows from "@/components/Show";
import Footer from "@/components/Footer";
import {get} from "@/Api/api";
export default {
  name: "Home",
  components: {
    HotSearch,
    Shows,
    Footer,
  },
  data() {
    return {
      srcs: "/img/",
      val:"西安",
      citys:[],
      hot: [],
      somes: [],
      id:'2',
      add:false,
      shows:[] ,
      hots:[] 
    };
  },
  created(){
    get("http://10.12.151.28//city/findAll").then(res=> {this.citys=res.data});
    get("https://www.fastmock.site/mock/740291a5ced1904236693a22a36d305c/home/hots").then(res=> this.hot=res)
    get("https://www.fastmock.site/mock/740291a5ced1904236693a22a36d305c/home/menu").then(res=>this.somes= res);
    get("http://10.12.151.28//FirstPage/selectAll/2").then(res=> this.shows=res.date) 
     get("https://www.fastmock.site/mock/740291a5ced1904236693a22a36d305c/home/hot").then(res=> this.hots=res)  
  },
  methods: {
 showadd() {
      this.add == true ? (this.add = false) : (this.add = true);
    },
    titleHadle(value) {
      console.log(value);
      this.$refs.shows.changeData();
    },
    checkcity(){
          for(let i in this.citys){
           if(this.citys[i].city==this.val){
             this.id= this.citys[i].cityid           
           }
         };
         let n="http://10.12.151.28//FirstPage/selectAll/"+this.id;
         get(n).then(res=> this.shows=res.date)
    },
    fn(){
      this.$router.push('Merchant')
    }
    
}}
</script>
<style scoped>
.box {
  width: 100%;
  
  
}

.top {
  width: 100%;
  height: 0.4rem;
}
.add {
  width: 1.3rem;
  height: 1rem;
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 0.5rem;
  font-size: .16rem;
}
.add p{width: 90%;height: 45%;margin: 5%;display: flex;align-items: center;}
.add p:first-child{border-bottom:  0.01rem gray solid;}
.add img{margin-right: 0.1rem;width: .22rem;height: .22rem;}
.city {
  width: 0.8rem;
  height: 0.4rem;
  float: left;
}
select {
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0.2rem;
  border: none;
  outline: none;
}
.sech {
  width: 2.5rem;
  height: 0.4rem;
  border-radius: 0.3rem;
  float: left;
}
.sech input {
  width: 100%;
  height: 0.3rem;
  border-radius: 0.3rem;
  margin-top: 0.1rem;
  border: none;
  outline: none;
  box-shadow: 0 0 0.01rem;
  padding-left: 1rem;
}
.right {
  width: 0.4rem;
  height: 0.4rem;
  float: left;
}
.right img {
  width: 85%;
  height: 100%;
  margin: 0.05rem 0 0 0.02rem;
}
.hot {
  width: 90%;
  height: 0.2rem;
  margin: 0.1rem auto;
  display: flex;
}
.hot ul {
  list-style: none;
  width: 85%;
  height: 100%;
  display: flex;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
}
.hot span {
  width: 12%;
  height: 100%;
  display: block;
}
.hot li {
  width: auto;
  height: 100%;
  margin-left: 0.1rem;
  border-color: gray;
  border-radius: 0.3rem;
}
.some {
  width: 90%;
  height: 4.2rem;
  margin: auto;
}
.some ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 90%;
  justify-content: space-around;
}
.some li {
  width: 15%;
  height: 0.8rem;
  margin: 0.05rem 0.05rem;
  text-align: center;
}
.some img {
  width: 100%;
  height: 0.5rem;
}
.some span {
  width: 100%;
  height: 0.3rem;
  text-align: center;
}
.page {
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
}
.page p {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 50%;
  background-color: red;

  margin: 0 0.05rem;
}
.foods {
  width: 90%;
  height: 0.4rem;
  margin: 0 5%;
}
.foods ul {
  width: 100%;
  height: 100%;
  display: flex;
  display: flex;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
}
.foods li {
  list-style: none;
  width: 12%;
  height: 100%;
  margin: 0.1rem;
}

.headerimg {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
}
</style>
