<template>
    <div class="bigbox">
        <div class="header">
      <van-icon name="arrow-left"  class="lt" @click="back()"/>
       <p class="package" @click="fun()">劵包</p>
      <img src="../assets/img/3.jpg" alt />
      <p class="card">卡包</p>
        </div>
     <ul class="all">
         <li>全部</li>
         <li>即将过期</li>
     </ul>
     <div class="load">
      <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
  <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
  <template #pulling="props">
    <img
      class="doge"
      src="../assets/img/d_y.png"
      :style="{ transform: `scale(${props.distance / 80})` }"
    />
  </template>

  <!-- 释放提示 -->
  <template #loosing>
    <img class="doge" src="../assets/img/d_y.png" />
  </template>

  <!-- 加载提示 -->
  <template #loading>
    <img class="doge" src="../assets/img/d_y.png" />
  </template>
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>
     </div>
     <div class="image">
         <img src="../assets/img/4.jpg" alt="">
         <p>暂无卡可用哦~</p>
     </div>
     <p class="ca">查看已失效的卡</p>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name:"Kabao",
    data(){
        return{
            count: 0,
            isLoading: false,
        }
    },
     methods: {
         fun(){
             this.$router.push("/Kajuan")
         },

          back(){
				this.$router.go(-1)
			},
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
}
</script>
<style>
.bigbox{ 
    width: 100%;
    position: relative;

}
.header{
    width: 100%;
    height: .5rem;
    /* background: pink; */
    display: flex;
    
}
.header .lt{
     font-size: .25rem;
     margin-top: 2.5%;
}
.header .package {
 font-size: .2rem;
 margin-top: .1rem;
 margin-left: 1rem;
}
 .header img {
  width: .4rem;
  height: .05rem;
  position: absolute;
  left:2.06rem;
  top:.34rem;
}
.header .card {
     font-size: .2rem;
      margin-top: .1rem;
      margin-left: .4rem;
 
}
.all{
    display: flex;
}
.all li:nth-child(1){
    background-color: #f4f4f4;
    width: .88rem;
    height: .3rem;
    text-align: center;
    padding-top:.05rem;
    border-radius: .5rem;
    font-size: .18rem;
    margin-top: .1rem;
}
.all li:nth-child(2){
    background-color: #f4f4f4;
    width: 1.14rem;
    height: .3rem;
    text-align: center;
    padding-top:.05rem;
    border-radius: .5rem;
    font-size: .18rem;
    margin-top: .1rem;
    margin-left: .3rem;
}
.image{
    position: absolute;
    left: 1.37rem;
    top:3rem;
}
.image img{
    width: 1rem;
    height: 1.05rem;
}
.ca{
    position: absolute;
    top:6.27rem;
    left:1.29rem;
    color: cornflowerblue;
    
}
.doge {
    width: 1.4rem;
    height: .72rem;
    margin-top: .08rem;
    border-radius: .04rem;
  }
  .load{
      height: .4rem;
  }
</style>