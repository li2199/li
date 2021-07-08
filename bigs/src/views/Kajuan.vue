<template>
  <div class="box">
    <div class="header">
      <van-icon name="arrow-left" class="lt"  @click="back()"/>

      <p class="package" >
        <img src="@/assets/img/3.jpg" alt  />劵包
      </p>
      <p class="card" @click="funa()">卡包</p>
    </div>
    <div class="centre">
      <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
        <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
        <template #pulling="props">
          <img
            class="doge"
            src="@/assets/img/d_y.png"
            :style="{ transform: `scale(${props.distance / 80})` }"
          />
        </template>

        <!-- 释放提示 -->
        <template #loosing>
          <img class="doge" src="@/assets/img/cw4.png" />
        </template>

        <!-- 加载提示 -->
        <template #loading>
          <img class="doge" src="@/assets/img/cw4.png" />
        </template>
        <p>刷新次数：{{ count }}</p>
      </van-pull-refresh>

      <div class="group">
        <img src="@/assets/img/1.jpg" alt />
        <p class="voucher">团购劵/代金券</p>
        <p class="examine">立即查看&nbsp;&nbsp;></p>
      </div>
      <div class="selectors">
        <p class="coupon">优惠劵</p>
        <ul class="all">
          <li>全部</li>
          <li>即将过期</li>
          <li>中奖劵</li>
        </ul>
        <p class="one">共1张可用</p>
      </div>
      <div class="offer">
        <!-- 优惠券单元格 -->
        <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
        <!-- 优惠券列表 -->
        <van-popup
          v-model="showList"
          round
          position="bottom"
          style="height: 90%; padding-top: 4px;"
        >
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
          />
        </van-popup>
      </div>
      <p class="lose">查看已失效的优惠劵</p>
    </div>
    <div class="led">
      <img src="@/assets/img/2.jpg" alt />
      <p>领劵中心</p>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt:new Date().getTime()/1000,// 1489104000,
  endAt:new Date('2021-08-18').getTime()/1000,// 1514592000,
  valueDesc: '5',
  unitDesc: '元',
};

export default {
     name:"Kajuan",
        data(){
            return{
                 count: 0,
                 isLoading: false,
                 showList:false,
                 chosenCoupon: -1,
                 coupons: [coupon],
                 disabledCoupons: [coupon],
            }
        },
        methods: {
           funa(){
             this.$router.push("/Kabao")
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
   onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    showList(index){
     this.showList = false;

    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  },
}
</script>
<style scoped>
.box {
  width: 100%;
 
}
.header {
  width: 100%;
  height: .5rem;
  /* background: skyblue; */
  display: flex;
  position: fixed;
}
.lt {
  font-size: .25rem;
  margin-top: 2.5%;
}
.package {
  font-size: .2rem;
  margin-left: .95rem;
  margin-top: .1rem;
}
.package img {
  width: .4rem;
  height: .05rem;
  position: absolute;
  left: 1.26rem;
  top: .34rem;
}
.card {
  font-size: .2rem;
  margin-left: .4rem;
  margin-top: .1rem;
}

.group {
  width:97%;
  height: .8rem;
  /* background: yellowgreen; */
  border: .01rem solid gainsboro;
  border-radius: 20px;
  margin: auto;
  position: relative;
}
.group img {
  width: .35rem;
  height: .3rem;
  position: absolute;
  left: .15rem;
  top: .24rem;
}

.voucher {
  font-size: .18rem;
  position: absolute;
  left: .64rem;
  top: .27rem;
}
.examine {
  font-size: .16rem;
  color: gray;
  position: absolute;
  left: 2.75rem;
  top: .29rem;
}
.selectors {
  width: 100%;
  height: .88rem;
  /* background-color: aqua; */
  position: relative;
}
.selectors .coupon {
  font-size: .2rem;
 margin: 0.1rem 0;
}
.selectors .all {
  display: flex;
  align-content: center;
  justify-content: space-around;
  width: 100%;
  height: 0.4rem;
}
.all li{
  width: 0.8rem;
  height: 0.2rem;
  background-color: #f4f4f4;
  text-align: center;
  line-height: 0.2rem;
  border-radius: .5rem;
  padding-top: .05rem;
  
}

.selectors .one {
  position: absolute;
  left: 0;
  top: .97rem;
  color: grey;
}
.doge {
  width: .31rem;
  height: .31rem;
  margin-top: .05rem;
  border-radius: .25rem;
}
.centre {
  width: 100%;
  height: 6rem;
  /* background-color: rgb(219, 138, 138); */
  position: absolute;
  top: 1rem;
}
.centre .offer {
  width: 3.46rem;
  height: .6rem;
  /* background: yellowgreen; */
  border: .01rem solid gainsboro;
  border-radius: .2rem;
  margin: auto;
  position: relative;
  top:.4rem;
  font-size: .2rem;
}
.centre .lose {
  color: #5a89cf;
  margin-left: .13rem;
  margin-top: .8rem;
}
.led {
  width: 1rem;
  height: .26rem;
  border: .01rem solid #f4f4f4;
  margin-left: .02rem;
  text-align: center;
  border-radius: .2rem;
  padding-top: .004375rem;
  position: fixed;
  left: .0025rem;
  top: 5.83rem;
}
.led img {
  width: .26rem;
  height: .29rem;
  position: absolute;
  top:0;
  left: .01rem;
}
.led p {
  position: absolute;
  top:.08rem;
  left:.31rem;
}
</style>