<template>
    <div class="box">
        <div class="header">
         <van-icon name="arrow-left" class="lt" @click="back()"/>
         <van-icon name="service-o" class="headset" />
         <van-icon name="envelop-o"  class="envelope"/>
         <van-icon name="setting-o" class="set" />
        </div>
        <p class="steel">美团钱包</p>
        <div class="money">
            <p class="balance">余额(元) ></p>
            <p class="zero" v-text="str"></p>
            <p class="bank">充值></p>
            <p class="binding" @click="chong">去充值</p>
            <div class="chong" v-show="show"> <h3>充值</h3><input type="number" placeholder="请输入金额" v-model="num" maxlength="6"> <input type="button" value="提交" @click="cz"><input type="button" value="取消" @click="showno"></div>
        </div>
        <div class="card">
            <van-icon name="ecard-pay" class="credit" />
            <p class="one">美团信用卡</p>
            <van-icon name="credit-pay"  class="credit1"/>
            <p class="two">银行卡立减</p>
            <van-icon name="balance-pay" class="credit2"/>
             <p class="there">现金券</p>
             <van-icon name="peer-pay" class="credit3"/>
            <p class="four">我的账单</p>
            <van-icon name="comment-o" class="credit4"/>
             <p class="five">美团月付</p>
             <van-icon name="after-sale" class="credit5" />
            <p class="six">生意贷</p>
            <van-icon name="balance-list-o" class="credit6"/>
             <p class="seven">借钱</p>
             <van-icon name="gift-card-o" class="credit7" />
            <p class="eight">美团卡</p>
        </div>
        <div class="meituan">
            <p class="bao">美团钱包</p>
            <p class="keji">-美团旗下金融科技平台-</p>
        </div>

    </div>
</template>
<script>
export default {
    name:"Wallet",
     data(){
        return{
                show:false,
                num:"",
                str:'0.00'
        }
    },
     methods:{
        back(){
            this.$router.go(-1)
        },
        chong(){
            this.show=true
        },
        showno(){
              this.show=false
        },
        cz(){
            const _this =this
            axios({
                url:"https://www.fastmock.site/mock/740291a5ced1904236693a22a36d305c/home/test",
                method:"post",
                data:{
                    num:this.num,
                    user:sessionStorage.getItem('user')
                }
            }).then(res=>{
                if(res.data.msg=='success'&&res.data.code=='200'){
                    _this.show=false
                  _this.str=  (_this.parsenum(_this.str)+_this.parsenum(_this.num))/100
                    
                }
            })
        },
        parsenum(val){
            return parseInt(val*100)
        }
    }
}
</script>
<style  scoped>
.box{
    width: 100%;
}
.header{
    width: 100%;
    height: .5rem;
    /* background-color: rgb(235, 123, 123); */
    position: relative;
}
.header .lt{
    position: absolute;
    left:0;
    top:.15rem;
    font-size: .25rem;
    
}
.header .headset{
     font-size: .25rem;
     position: absolute;
     left:2.5rem;
     top:.15rem;
}
.header .envelope{
     font-size: .25rem;
     position: absolute;
     left:3rem;
     top:.15rem;
}
.header .set{
    font-size: .25rem;
    position: absolute;
    left:3.45rem;
    top:.15rem;
}
.steel{
    font-size: .34rem;
    text-align: left;
    font-weight: bold;
    margin-top: .1rem;
}
.money{
    width: 97%;
    height: 1.16rem;
    background-color: #fe8e20;
    margin: auto;
    border-radius: .2rem;
    margin-top: .25rem;
    position: relative;
}
.money .balance{
    font-size: .18rem;
    color: white;
    position: absolute;
    top:.24rem;
    left:.22rem;
}
.money .zero{
    font-size: .28rem;
    color: white;
    position: absolute;
    top:.53rem;
    left:.28rem;
}
.money .bank {
    font-size: .18rem;
    color: white;
    position: absolute;
    top:.24rem;
    left:1.9rem;
}
.money .binding{
    font-size: .28rem;
    color: white;
    position: absolute;
    top:.53rem;
    left:190px;
}
.card{
    width: 100%;
    height: 1.65rem;
    /* background-color: thistle; */
   margin-top: .3rem;
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   position: relative;
}

.card .one{
    position: absolute;
    left: 0px;
    top:.44rem;
}
.card .two{
    position: absolute;
    left: 1rem;
    top:.44rem;
}
.card .there{
    position: absolute;
    left: 2.16rem;
    top:.44rem;
}
.card .four{
    position: absolute;
    left: 3.11rem;
    top:.44rem;
}

.card .five{
    position: absolute;
    left: .05rem;
    top:1.31rem;
}
.card .six{
    position: absolute;
    left: 1.15rem;
    top:1.31rem;
}
.card .seven{
    position: absolute;
    left: 2.27rem;
    top:1.31rem;
}
.card .eight{
    position: absolute;
    left: 3.23rem;
    top:1.31rem;
}
.card .credit{
    font-size: .5rem;
    
}
.card .credit1{
    font-size: .5rem;
    margin-left: .4rem;
}
.card .credit2{
    font-size: .5rem;
    margin-left: .4rem;
}
.card .credit3{
    font-size: .5rem;
    margin-left: 40px;
}
.card .credit4{
    font-size: .5rem;
    margin-left: .06rem;
}
.card .credit5{
    font-size: .5rem;
    margin-left: .4rem;
}
.card .credit6{
    font-size: .5rem;
    margin-left: .4rem;
}
.card .credit7{
    font-size: .5rem;
    margin-left: .4rem;
}
.meituan{
    margin-top: 1.5rem;
    color: grey;
}
.meituan .bao{
     font-weight: bold;
     font-size: .2rem;
     margin-bottom: .1rem;
     margin-left: 1.5rem;
}
.chong{width: 2rem;height: 2.2rem;background-color:white;text-align: center;position: absolute;right: 0;border: 0.01rem solid;z-index: 99;}
.chong input{border: none;margin: 0.2rem 0;}
.chong input{background-color: gold;width: 60%;height: 10%;border-radius: 0.3rem;}
.keji{
    margin-left: 1.05rem;
}
</style>