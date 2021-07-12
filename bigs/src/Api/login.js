// import {get} from "@/Api/api";
// export function  send() {
//     let n = "http://localhost:9000/users/sendnum/"+ this.$route.query.num;
//    get(n).then((res) => {
//       if (res.data.msg == "success" && res.data.code == "200") {
//         this.change = true;
//         this.str = 60;
//         let timer = setInterval(() => {
//           this.str--;
//           if (this.str == 0) {
//             clearInterval(timer);
//             this.change = false;
//             this.str = "重新发送";
//           }
//         }, 1000);
//       }
//     });
//   }
//   export function login() {
//     console.log(this.$route.query.num);
//     if(this.code.length==6){
//         get("http://localhost:9000/users/login",{
//         tel: this.$route.query.num,
//         code: this.code,
//       }).then((res) => {
//       if (res.data.msg == "success" && res.data.code == "200") {
//         sessionStorage.setItem("user", this.$route.query.num);
//         this.$router.push({
//           path: "/My",
//           query: { num: this.$route.query.num },
//         });
//       }else if(res.data.code == "500"){
//         alert('验证码超时，请重新获取')
//       }
//     });
//     }else{
//       alert('验证码为6位')
//     }

   
//   }