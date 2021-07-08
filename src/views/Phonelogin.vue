<template>
  <div class="box" >
  
    <div class="big">
      <Back :sty='sty' :src='src'/>
      
      <div class="phonelogin  same" @click="login('log')"><p>登录</p></div>
      <div class="vxlogin  same" @click="login('reg')"><p>注册</p></div>
      <div class="other  same"><p class="oth1">  </p><p class="oth2"> </p></div>
      <div class="seting  same">设置<img src="../assets/img/d4_.png" ></div>
      <div class="agreement  same"><input type="checkbox" v-model='check'> <span> 我已阅读并同意 <a href="http://"> 《美团用户服务协议》</a>、<a href="http://"> 《隐私政策》</a> 等，接受免除或者限制责任、诉讼管辖约定等粗体标示条款</span></div>
    </div>
  
  </div>
</template>
<script>
import Back from "@/components/Back";
  export default {
  
    name: "Phonelogin",
    components:{
			Back
		},

    data() {
  
      return {
        sty:{
                width: '0.25rem',
		            height: '0.25rem',
                margin:'0.25rem 0 0.5rem 0.15rem',
     }, 
            src:'/img/crp.png',
            check:false
    }
    },
    methods:{

      login(e){
        if(this.check){
        e=="reg"?this.$router.push('/Phonelogin/Reg'): this.$router.push('/Reg/Login') 
        }else{
          alert('请勾选用户协议')
        }

      }
    }
  

  }
</script>

<style scoped>
  .box {
    width: 100%;
    height: 6.6rem;
    background-image: url(../assets/img/_20210616205634.jpg);
    background-size: contain;
    position: relative;
  
  }
  .big {
    width: 100%;
    height: 6.6rem;
    background: rgba(11, 13, 26, 0.55);
    position: absolute;
    background-position: 0

  }
    .big img{height: 100%;width: 20%;}
    .same{width: 90%;height: 0.5rem;border-radius: 0.3rem;text-align: center;display: flex;align-items: center;justify-content: center;margin-left: 5%}
    .vxlogin{margin-bottom: 0.2rem;background-color: white;}
    .phonelogin{margin-bottom: 0.5rem;background-color: rgb(63, 61, 66);color: white;margin-top: 70%;}
  .oth1{background-image: url("../assets/img/_20210616205818.png");margin-right: 0.2rem;background-repeat: no-repeat;background-size: cover}
  .oth2{background-image: url("../assets/img/_20210616205827.png");background-repeat: no-repeat;background-size: 100%}
  .other p{width: 0.6rem;height: 0.6rem;border-radius: 50%;}
    p{width: 30%;height: 100%;display: inline-block;line-height: 0.5rem}
    .phonelogin img{height: 65%;width: 10%;margin-right: 0.1rem}
    .seting{color: white}
   .big .seting img{width: 3%;height: 30%;margin-left: 0.1rem}
   .agreement{color:rgb(164, 163, 169);margin-top: 10%;font-size: 12px;}
   .agreement input{margin-bottom: 0.1rem;}
   a{text-decoration: none;color: rgb(79, 97, 119);}
</style>
