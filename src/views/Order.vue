<template>
  <div class="box">
    <div class="header">
      <!-- <p @click="back()">&lt;</p> -->
      <Back :sty='sty' :imgsty='imgsty'/>
      <div class="search">
        <img src="../assets/27.jpg"  />
        <input type="text" placeholder="搜索我的订单" />
      </div>
      <div class="meau">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
    </div>
    <div class="header-con">
      <van-tabs v-model="active">
        <van-tab title="全部订单">全部订单</van-tab>
        <van-tab title="待付款">待付款</van-tab>
        <van-tab title="可使用">可使用</van-tab>
        <van-tab title="退款/售后">退款/售后</van-tab>
      </van-tabs>
    </div>
    <div class="none">
        <van-empty
            class="custom-image"
            image="../image/30.jpg"
            description="你没有相关订单哦"
        />
    </div>
  </div>
</template>
<script>
import Back from "@/components/Back";
export default {
  name: "Order",
  components:{
    Back
  },
  data() {
    return {
      value1: 0,
      option1: [
        { text: "全部分类", value: 0 },
        { text: "团购", value: 1 },
        { text: "外卖", value: 2 },
        { text: "酒店", value: 3 },
        { text: "电影演出", value: 4 },
        { text: "景点门票", value: 5 },
        { text: "餐厅订座", value: 6 },
        { text: "点餐", value: 7 },
        { text: "买单", value: 8 },
      ],
      sty:{
            width: '6%',
		        height: '100%',
            marginLeft:'0.1rem',
            marginTop:'0.03rem'
      },
      imgsty:{
         width:'50%' ,
		        height: '60%',
		       marginLeft: '0.1rem',
		       
      },
      active:''
    };
  },
  methods:{
			back(){
				this.$router.go(-1)
			},
}
}
</script>
<style scoped>
.header {
  width: 100%;
  height: 0.4rem;
  background-color: white;
  display: flex;
  padding-top: 0.1rem;
}
p {
  width: 0.14rem;
  height: 0.24rem;
  font-size: 0.24rem;
  background-color: white;
  margin-left: 0.2rem;
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
.meau{
  position: relative;
  left: 0.35rem;
  margin-top: -0.09rem;

}
.header-con {
  width: 100%;
  background-color: #f4f4f4;
  height: 2.2rem;
}
.none{
    background-color: #f4f4f4;
    height: 5.6rem;
}
.van-empty image {
    width: 108px;
    height: 106px;
}
</style>