<template>
  <div class="box">
    <Back :sty="stys"  />
    <div class="name">验证码登录</div>
    <p class="p1">您输入的号码是{{ this.$route.query.id }}</p>
    <div class="middle">
      <input type="text" v-model="code" class="show" placeholder="验证码" />
      <input
        type="button"
        :value="str"
        @click="send()"
        class="send"
        :disabled="change"
      />
    </div>
    <div class="line"></div>
    <div class="wenti">
      <a href="">密码登录</a>
      <a href="">收不到验证码？获取语音验证码</a>
    </div>
    <input class="input1" type="button" value="下一步" @click="login()" />
  </div>
</template>
<script>
import Back from "@/components/Back";
import {get} from "@/Api/api";
export default {
  name: "Login",
  components: {
    Back,
  },
  data(){
    return {
      code: "",
      str: "发送验证码",
      change: false,
      imgsty:{
          width: "80%",
          height: "100%",
        },
         stys:{
         width: "0.25rem",
          height: "0.25rem",
          margin: "0.15rem 0 0.2rem 0.2rem",
        }

    };
  },
  methods: {
    send() {
    let n = "http://10.12.151.28//users/sendnum/"+ this.$route.query.num;
   get(n).then((res) => {
      if (res.msg == "success" && res.code == "200") {
        this.change = true;
        this.str = 60;
        let timer = setInterval(() => {
          this.str--;
          if (this.str == 0) {
            clearInterval(timer);
            this.change = false;
            this.str = "重新发送";
          }
        }, 1000);
      }
    });
  },
  login() {
    console.log(this.$route.query.num);
    if(this.code.length==6){
        get("http://10.12.151.28//users/login",{
        tel: this.$route.query.num,
        code: this.code,
      }).then((res) => {
      if (res.msg == "success" && res.code == "200") {
        sessionStorage.setItem("user", this.$route.query.num);
        this.$router.push({
          path: "/My",
          query: { num: this.$route.query.num },
        });
      }
    });
    }else{
      alert('验证码为6位')
    }
    },
}
}
</script>
<style scoped>
.box {
  width: 90%;
  height: 6.2rem;
}

.name {
  width: 80%;
  height: 0.2rem;
  margin: auto;
  text-align: left;
  font-weight: bold;
}

.middle {
  width: 70%;
  margin: 0.2rem auto;
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
}

.line {
  width: 80%;
  margin: auto;
  border-bottom: 1px solid gainsboro;
}

.left {
  width: 0.75rem;
  height: 0.3rem;
  margin-left: 0.2rem;
  float: left;
}

.wenti {
  width: 80%;
  height: 0.3rem;
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.wenti a {
  margin-right: 0.15rem;
}
a {
  text-decoration: none;
  font-size: 0.12rem;
  padding-left: 0.19rem;
  color: rgb(187, 206, 221);
}

.input1 {
  display: block;
  width: 2.34rem;
  height: 0.39rem;
  margin: auto;
  border-radius: 0.5rem;
  background-color: rgb(254, 102, 52);
  margin-top: 0.44rem;
  color: white;
  border: none;
  outline: none;
}

.p1 {
  font-size: 0.12rem;
  color: gray;

  text-align: left;
  width: 80%;
  height: 0.2rem;
  margin: 0.1rem auto;
}
.show {
  border: none;
  padding-left: 0.2rem;
}
.send {
  background-color: whitesmoke;
  border-radius: 0.3rem;
  border: none;
  width: 40%;
}
</style>