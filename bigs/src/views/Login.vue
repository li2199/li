<template>
  <div>
    <div class="head">
      <Back/>
    </div>
    <div class="box">
      <div class="username">
        用户名:
        <input type="text" @blur="name" v-model="username" />
      </div>
      <h5 id="usermeg">{{ namemeg }}</h5>
      <div class="password">
        <input
          class="number"
          type="password"
          value=""
          placeholder="请输入密码"
          v-model="userpassword"
        />
        <p>忘记密码</p>
      </div>
      <h5 id="usermeg">{{ passmeg }}</h5>

      <div class="sure" @click="sure">登录</div>
      <h5 id="usermeg" style="text-align: center; color: red">{{ suremeg }}</h5>
      <p class="mes" >短信验证码登录</p>
      
      <div class="agree">
        <input type="checkbox" name="" id=""  v-model="agree">
        &nbsp;&nbsp;<span>您已阅读并同意《闲鱼社区用户服务协议》《隐私权政策</span>》
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Back from "@/components/Back";
import encrypt from "@/tool/tool";
export default {
  name: "Reg",
  components: {Back},
  data() {
    return {
      username: "",
      namemeg: "",
      userpassword: "",
      passmeg: "",
      suremeg: "",
      agree:false,
      keyword:21992199
    };
  },
  methods: {
   
    name() {
      axios.post("http://localhost:9000/testlogin",{username:this.username}).then((res) => {
        
        if (res.data.status == 'success') {
          this.namemeg = "请输入密码";
        } else {
          this.namemeg = "用户未注册，请注册";
        }
      });
    },
    sure() {
      if (!this.username) {
        this.namemeg = "用户名不能为空";
      } else if (!this.userpassword) {
        this.passmeg = "密码不能为空";
      }else if (!this.agree) {
        this.suremeg = "请阅读并以下同意协议";
      } else {
        axios.post("http://localhost:9000/userlogin",{
        userpassword:encrypt.encrypt(this.userpassword, this.keyword),
        username:this.username}
        ).then((res) => {
          console.log(res.data);
          if (res.data.status =='success') {
           sessionStorage.setItem("user",this.username);
           
            this.suremeg = "登录成功";
            this.$router.push("/My");
          
          } else {
            this.suremeg = "用户名或密码错误";
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
  width: 3.4rem;
  margin: auto;
}
.head {
  width: 100%;
  height: 0.4rem;
  background-color: white;
  position: fixed;
  top: 0;
}
.more {
  width: 3.4rem;
  margin: auto;
  display: flex;
   padding-top: .1rem;
  justify-content: space-between;
  font-size: 0.16rem;
}
.more img {
  width: 0.18rem;
  height: 0.18rem;
}
.username {
  margin: 1.8rem auto 0;
}
.username input {
  height: 0.3rem;
  border: none;
  border-bottom: 0.01rem solid;
  width: 2.6rem;
}
h5 {
  font-size: 0.12rem;
  font-weight: normal;
  width: 100%;
  height: 0.16rem;
  color: rgb(139, 139, 139);
}
.password {
  border-bottom: 0.01rem solid #f7beaa;
  display: flex;
  justify-content: space-between;
  margin-top: 0.6rem;
}
.password p {
  font-size: 0.12rem;
}
.number {
  height: 0.2rem;
  border: none;
  outline: none;
}
.sure {
  width: 3.2rem;
  height: 0.45rem;
  background-color: #f9e479;
  margin: 0.6rem auto 0;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.45rem;
  color: #838181;
}
.mes {
  font-size: 12px;
  margin-top: 0.2rem;
  text-align: center;
}
.other {
  font-size: 12px;
  margin-top: 0.5rem;
  text-align: center;
}
.box2 {
  width: 1.4rem;
  height: 0.48rem;
  margin: 0.2rem auto 0;
  display: flex;
  justify-content: space-between;
}
.box img {
  width: 0.48rem;
  height: 0.48rem;
}
.agree {
  font-size: 12px;
  color: #838181;
  margin: 0.35rem auto;
  display: flex;
  align-items: center;
}
.agree input {
  display: inline;
  border-radius: 50%;
}
</style>
