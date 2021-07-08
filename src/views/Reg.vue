<template>
  <div class="box">
  <div class="all">
    <Back :sty='sty'/> 
    <h1>注册</h1>
    <p>亲，欢迎注册大众点评账户</p>

    <div class="box1">
      <div class="phone">
        手机号:
        <!-- <select name="" id=""><option value="+86"></option></select>  -->
        <input class="number" type="text" @blur="phone" v-model="usertel" />
        <input
          class="mes"
          type="button"
          @click="securityCode"
          :disabled="show"
          :value="yzcode"
        />
      </div>
      <h5 id="phonemeg">{{ phonemeg }}</h5>
      <div class="Yanzheng">
        验证码:<input type="text" placeholder="" id="yz" v-model="code" /><span v-text="codes"></span>
        <h5>{{ codemeg }}</h5>
      </div>
      <div class="username">
        用户名:
        <input
          type="text"
          id="phone"
          name="username"
          @blur="name"
          v-model="username"
        />
      </div>
      <h5 id="usermeg">{{ namemeg }}</h5>
      <div class="password">
        密&nbsp;&nbsp;&nbsp;码:
        <input
          type="password"
          id="mima"
          name="userpass"
          v-model="userpassword"
          @blur="pass"
        />
      </div>
      <h5 id="passmeg">{{ passmeg }}</h5>
    </div>
    <div class="sure" @click="fn">
      同意协议并注册
      <h5 id="passmeg">{{ suremeg }}</h5>
    </div>

    <div class="agree">
      <input type="checkbox" name="" id="" v-model="agree" /> &nbsp;&nbsp;<span
        >已阅读并以下协议：大众点评平台服务协议、隐私权政策、法律声明、支付宝服务协议、中国移动认证服务条款</span
      >
    </div>
    </div>
  </div>
</template>

<script>
import Back from "@/components/Back";
import encrypt from "@/tool/tool";
import axios from "axios";
export default {
  name: "Reg",
  components: {Back},
  data() {
    return {
      sty:{
                width: '0.25rem',
		            height: '0.25rem',
                margin:'0.25rem 0 0.5rem 0.15rem',
     }, 
      usertel: "15291108563",
      phonemeg: "",
      yzcode: "获取验证码",
      codemeg: "",
      code: "",
      codes:'',
      show: true,
      username: "bbb222",
      namemeg: "*必填，4-10位字母，数字结合，不能以数字开头",
      userpassword: "",
      passmeg: "*必填，6-16位字母，数字结合，不能以数字开头",
      agree: "true",
      suremeg: "",
      arr: [],
      keyword:21992199
    };
  },
  created() {},
  methods: {
    gohome(){
        this.$router.replace("/Frist");
    },
    phone() {
      //正则判断
      var reg = /^1\d{10}$/;
      if (!reg.test(this.usertel)) {
        this.phonemeg = "请输入正确的手机号";
      } else {
        this.phonemeg = "格式正确";
        //后端获取
        axios({
          url: "http://localhost:9000/testphone",
          method: "post",
          data: {usertel:this.usertel},
        }).then((res) => {
          if (res.data.status == 'success') {
            this.phonemeg = "请获取验证码";
            this.show = false;
            this.arr[0] = 1;
            console.log(this.arr);
          } else {
            this.phonemeg = "手机号已被注册";
          }
        });
      }
    },
    name() {
      //正则判断
      var reg = /^\D[\w]{4,20}$/i;
      if (!reg.test(this.username)) {
        this.namemeg = "请输入正确的格式";
      } else {
        this.namemeg = "格式正确";
        //后端获取
        axios.post("http://localhost:9000/testuser",
          {
            username: this.username,
          },
        ).then((res) => {
          console.log(res.data);
          if (res.data.status == 'success') {
            this.namemeg = "请设置密码";
            this.arr[1] = 1;
            console.log(this.arr);
          } else {
            this.namemeg = "该会员名已被注册，请重新设置";
          }
        });
      }
    },
    pass() {
      //正则判断
      var reg = /^\D[\w]{6,16}$/i;
      if (!reg.test(this.userpassword)) {
        this.passmeg = "请输入正确的格式";
      } else {
        this.passmeg = "格式正确";
        //后端获取
        this.arr[2] = 1;
        console.log(this.arr);
      }
    },
    securityCode() {
      axios({
        url: "http://localhost:9000/sendmsg",
        method: "post",
        params: {
          tel: this.usertel,
        },
      }).then((res) => {
        console.log(res.data);
        if (res.data.status == 'success') {
          this.codes=res.data.code;
          this.yzcode = 10;
          let myTimer = setInterval(() => {
            this.show = true;
            this.yzcode--;
            if (this.yzcode == 0) {
              clearInterval(myTimer);
              this.yzcode = "重新发送";
              this.show = false;
            }
          }, 1000);
        } else {
          this.yzcode = "获取验证码";
        }
      });
    },
    fn() {
      if (!this.usertel) {
        this.phonemeg = "手机号不能为空";
      } else if (!this.code) {
        this.codemeg = "验证码不能为空";
      } else if (!this.username) {
        this.namemeg = "会员名不能为空";
      } else if (!this.userpassword) {
        this.passmeg = "密码不能为空";
      } else if (this.agree == false) {
        this.suremeg = "请阅读并以下同意协议";
      } else {
        for (var i in this.arr) {
          if (this.arr[i] != 1) {
            this.suremeg = "格式有误请重新输入";
            console.log(this.arr);
            return;
          }
        }
        axios.post("http://localhost:9000/userreg",{
          usertel:this.usertel,
          userpassword:encrypt.encrypt(this.userpassword, this.keyword),
          username:this.username,
          code:this.code
        }).then((res) => {
          console.log(res.data);
          if (res.data.status == 'success') {
            console.log("成功");
            localStorage.setItem("userId",this.usertel);
            this.$router.go(-1);
          } else {
            this.suremeg = "用户已被注册或验证码有误";
          }
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width:100%;
  height:6.4rem;
 
}
.all{
   width:90%;
  height:6.4rem;
  margin: auto;
}
.more {
  padding-top: 0.2rem;
  width: 0.18rem;
  height: 0.18rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.16rem;
}
h1 {
  font-size: 0.3rem;
  font-weight: normal;
  margin-top: 0.5rem;
}
p {
  margin-top: 0.15rem;
  color: #838181;
}
.phone {
  width: 3.4rem;
  display: flex;
  margin-top: 0.6rem;
}
.box1.phone .number {
  width: 2rem;
  height: 0.2rem;
  border: none;
  border-bottom: 0.01rem solid black;
  outline: none;
}
.Yanzheng {
  margin-top: 0.25rem;
}
.username {
  margin-top: 0.25rem;
}

.box1 input {
  height: 0.25rem;
  border: none;
  border-bottom: 0.01rem solid;
  width: 2rem;
}
h5 {
  font-size: 0.12rem;
  font-weight: normal;
  width: 100%;
  height: 0.16rem;
  color: rgb(139, 139, 139);
}
.box1 .password {
  height: 0.3rem;
  width: 100%;
  margin-top: 0.3rem;
}
.box1 .phone .mes {
  width: 0.8rem;
  height: 0.3rem;
  font-size: 0.12rem;
  border-radius: 0.2rem;
  border: 0.01rem solid;
  text-align: center;
  line-height: 0.3rem;
  background-color: #f9e479;
}
.sure {
  width: 3.2rem;
  height: 0.45rem;
  background-color: #f9e479;
  margin: 0.2rem auto;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.45rem;
  color: #838181;
}

.agree {
  font-size: 12px;
  color: #838181;
  margin: 0.7rem auto 0;
  display: flex;
  align-items: flex-start;
}
.agree input {
  display: inline;
  border-radius: 50%;
}
</style>
