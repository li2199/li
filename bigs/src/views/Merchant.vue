<template>
  <div class="box">
    <div class="header">
      <van-nav-bar
        title="添加商户"
        right-text="规则说明"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="middle">
      <p class="p1">上传门头图（必填）</p>
      <p class="p2">
        1.现场拍摄清晰图片<br />2.图片上需带有完整招牌，招牌名与商户名一致
      </p>
      <div class="p3">
        
            <van-uploader :after-read="onRead" accept="image/*" multiple :max-count="5" style="width:100%;height:100%;" v-model="fileList">
　　　　 <img src="@/assets/hsv.png" class="upimg ">
　　    </van-uploader>   
        
      </div>
    </div>
    <div class="nav">
      <div class="nav1">
        <p class="p5">商户名（必填）</p>
        
      </div>
      <div class="nav2">
        <input type="text" placeholder="商户招牌上的名称，长度1-50位"  v-model="name" />
      </div>
      <p class="hr"></p>
      <!-- <div class="nav3">
        <p class="p5">商户类型(必填)</p>
        <p class="one">成功添加指定类型商户最高可获得<span>50积分</span></p>
        <van-field
          v-model="fieldValue"
          is-link
          readonly
          label=""
          placeholder="请选择最贴近商户经营范围的类型"
          @click="show = true"
        />
        <van-popup v-model="show" round position="bottom">
          <van-cascader
            v-model="cascaderValue"
            title="选择商户类型"
            :options="options"
            @close="show = false"
            @finish="onFinish"
          />
        </van-popup>
      </div>-->
      <p class="hr"></p> 
      <p class="city">选择城市</p>
      <select v-model="city" @change="checkcity(city)" >
          <option v-for="i in citys"  v-text="i.city" ></option>
        </select>
      </div>
      <p class="hr"></p>
      <div class="nav4">
        <p class="two" >地址（必填）</p>
        <input type="text" placeholder="精确到街道门牌，如中山路1号" v-model="address" />
      </div>
      <p class="hr"></p>
      <div class="nav4">
        <p class="two" >电话（必填）</p>
        <input type="tel" placeholder="手机号/座机号" maxlength="11" v-model="tel" />
      </div>
      <p class="hr"></p>
      <!-- <div class="nav4">
        <p class="two">营业状态（必填）</p>
        <van-radio-group v-model="radio" checked-color="#ee0a24" direction="horizontal" :value='choose'>
          <van-radio name="1">正在营业</van-radio>
          <van-radio name="2">尚未营业</van-radio>
          <van-radio name="3">暂停营业</van-radio>
        </van-radio-group>
      </div> -->
      <div class="nav5">
          <p class="third" @click="addstore">提交</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  name: "Merchant",
  data() {
    return {
      value: "",
      name:'',
     address:'',
      choose:'',
      city:"西安",
      citys:'',
      tel:"",
      showPicker: false,
      checked: true,
      imgs:[],
      fileList: [],
      radio:true,
      show: false,
      fieldValue: "",
      cascaderValue: "",
      // 选项列表，children 代表子选项，支持多级嵌套
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onClickLeft() {
        this.$router.go(-1);
    },
    onClickRight() {
        Toast("规则说明");
    },
     onRead(file) {
       let obj={};
       obj.src=file.content
        this.imgs.push(obj);
        console.log(this.imgs)
       
},
checkcity(city){
  this.city=city
},
  addstore(){
    if(this.imgs.length!=0){
       axios({
        url:"http://10.12.151.28//shops/saveShop",
        method:"post",
        data:{
          sname:this.name,
          address:this.address,
          city:this.city,
          tel:this.tel,
          img:this.imgs
        }
					}           
        )
        .then(res=>{
          if(res.data.msg=='success'&&res.data.code=='200'){
              this.$router.push('/')
          }
        })
    }else{
     alert('请上传图片')
    
  }
    
  }
  },
  created(){
    this.$dialog.alert({
      title: '定位服务尚未开启',
      message: '如需获取当前位置信息并自动填充，请开启定位权限',
      theme: 'round-button',
    }),
    axios({
        url:"http://10.12.151.28//city/findAll",
        method:"get",
					}           
        )
        .then(res=>{
        
          if(res.data.msg=='success'&&res.data.code=='200'){
              this.citys=res.data.data;
              console.log(this.citys)
          }
        })
       
  }
  }

</script>
<style scoped>
.header {
  width: 100%;
  height: 0.4rem;
  position: fixed;
  top: 0;
}
.city{display: inline-block;margin-left: 0.14rem;}
.middle {
  width: 100%;
  height: 1.93rem;
  margin-top: 0.46rem;
  /* background-color: blanchedalmond; */
}
.p1 {
  height: 0.16rem;
  font-size: 0.14rem;
  font-weight: bold;
  padding-top: 0.25rem;
  margin-left: 0.2rem;
}
.p2 {
  padding-top: 0.1rem;
  margin-left: 0.2rem;
  font-size: 0.12rem;
  color: gray;
}
.p3 {
  padding-top: 0.1rem;
  margin-left: 0.2rem;
  display: flex;
}
.p3 img{
 width: 100%;height: 100%;}

.p4 {
  width: 1.57rem;
  height: 0.92rem;
  border: 1px dashed gray;
  margin-left: 0.1rem;
  border-radius: 0.1rem;
  background-color: #f8f8f8;
  margin: auto;
  font-size: 0.1rem;
  text-align: center;
  line-height: 0.7rem;
}
.p4 img {
  display: block;
  width: 0.26rem;
  height: 0.21rem;
  margin: auto;
  position: relative;
  top: 0.25rem;
}
.nav1 {
  width: 100%;
  height: 0.48rem;
  /* background-color: hotpink; */
  display: flex;
  justify-content: space-between;
  line-height: 0.65rem;
  font-size: 0.14rem;
}
.p5 {
  margin-left: 0.2rem;
}
.van-checkbox {
  margin-right: 0.1rem;
  margin-top: 0.15rem;
}
.nav2 {
  width: 100%;
  height: 0.35rem;
  /* background-color: khaki; */
}
.nav2 input{
  width: 88%;
  height: 0.25rem;
  margin-left: 0.2rem;
  border: none;
  outline: none;
  margin-top: 0.1rem;
}
.p6 {
  margin-left: 0.2rem;
  font-size: 0.14rem;
  line-height: 0.4rem;
  color: #d0d0d0;
}
.hr {
  width: 90%;
  border-bottom: 1px solid #d0d0d0;
  margin: auto;
}
.nav3 {
  width: 100%;
  height: 0.8rem;
  /* background-color: hotpink; */
  font-size: 0.14rem;
  padding-top: 0.3rem;
}
.one {
  font-size: 0.12rem;
  color: gray;
  margin-left: 0.2rem;
}
span {
  color: red;
}
.nav4 {
  width: 100%;
  height: 0.65rem;
  /* background-color: hotpink; */
  font-size: 0.14rem;
}
.nav4 input {
  width: 88%;
  height: 0.25rem;
  margin-left: 0.2rem;
  border: none;
  outline: none;
  margin-top: 0.1rem;
}
.two {
  margin-left: 0.2rem;
  padding-top: 0.1rem;
}
.van-radio-group{
    margin-top: .1rem;
    padding-left: .2rem;
}
.div1{
    height: .48rem;
}
.nav5{
    width:100%;
    height: .5rem;
    /* background-color: khaki; */
    position: fixed;
    bottom: 0px;
}
.third{
    width: 90%;
    height: .4rem;
    background-color: orange;
    margin: auto;
    border-radius: .3rem;
    text-align: center;
    line-height: .4rem;
    color: white;
    margin-top: .05rem;
}
select {
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 1.2rem;
  border: none;
  outline: none;
}
</style>