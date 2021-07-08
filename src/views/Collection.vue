<template>
  <div class="box">
    <div class="header">
     <Back :sty='sty'  />
      <div class="search">
        <img src="../assets/27.jpg" />
        <input type="text" placeholder="搜索" />
      </div>
      <div class="zhuan">
        <img src="../assets/28.jpg" />
        专辑
      </div>
      <div class="dian">
        <img src="../assets/29.jpg" />
      </div>
    </div>
    <div class="header-con">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
        <van-dropdown-item v-model="value4" :options="option4" />
      </van-dropdown-menu>
    </div>
    <div class="boxshow" v-for="i in data ">
     <div class="iimg"><img :src="i.img"></div> 
     <div class="divs">
       <p>店铺：{{i.sname}}</p>
      <p>评分：{{i.score}}</p>
      <p>城市：{{i.city}}</p>
      <p>地址：{{i.address}}</p></div> 
    </div>
        
    
    <div class="cang" v-if="data.length==0">
        <van-empty
            class="custom-image"
            image="../image/31.jpg"
            description="暂无相关收藏"
        />
    </div>
  </div>
</template>
<script>
import Back from "@/components/Back";

export default {
  name: "Collection",
  components:{
    Back
  },
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "A",
      value4: "i",
      option1: [
        { text: "全部类型", value: 0 },
        { text: "商户", value: 1 },
        { text: "内容", value: 2 },
        { text: "团购", value: 3 },
        { text: "其他", value: 4 },
      ],
      option2: [
        { text: "全部地区", value: "a" },
        { text: "附近", value: "b" },
      ],
      option3: [
        { text: "全部分类", value: "A" },
      ],
      option4: [
        { text: "按时间", value: "i" },
        { text: "按距离", value: "ii" },
      ],
       sty:{
             width: '8%',
		        height: '60%',
            marginLeft:"0.15rem"
      },
      data:[]
    };
  },
  created(){
    axios({
      url:'http://10.12.159.186/collectShops/selectAllShops/'+sessionStorage.getItem('users')}).then(res=>{
      this.data=res.data.date
      console.log(res.data)
      })
  }
};
</script>
<style scoped>
.boxshow{ width: 90%;height: 1.2rem;margin: 0.5rem auto;border:0.01rem solid gray;border-radius: .1rem;}
.boxshow img{width: 0.9rem;height: 1rem;}
.boxshow p{width: 100%;height: 0.2rem;float: right;}
.iimg{float: left;}
.divs{width: 65%;height: 1.2rem;float: right;}
.header {
  width: 100%;
  height: 0.4rem;
  /* background-color: wheat; */
  display: flex;
  padding-top: 0.1rem;
}

.search {
  width: 2.2rem;
  height: 0.28rem;
  position: relative;
}
.search img {
  position: absolute;
  top: 4px;
  left: 0.3rem;
}
input {
  width: 2.2rem;
  height: 0.28rem;
  background-color: #efefef;
  border: none;
  border-radius: 0.3rem;
  font-size: 0.14rem;
  text-align: center;
  margin-left: 0.15rem;
}

.header-con {
  width: 100%;
  height: 0.48rem;
}
.zhuan {
  width: 0.3rem;
  height: 0.3rem;
  /* background-color: gold; */
  font-size: 0.1rem;
  position: relative;
  left: 0.4rem;
  text-align: center;
}
.dian {
  position: relative;
  left: 0.5rem;
  top: 0.07rem;
}
.cang{
    background-color: #f4f4f4;
    height: 5.8rem;
}
.van-empty{
    padding: 140px 0;
}
.van-empty__image{
    width: 2.2rem;
    height: 2.1rem;
}
.tex{width:90%;height:0.8rem;color:grey;margin: 0.5rem auto;background-color: wheat}
.tex p{width: 100%;height:50%;align-items: center;display: flex;justify-content: space-between;}
.tex input{width: 20%;height: 100%;}

</style>