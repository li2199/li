<template>
    <div class="box">
       <div class="top">
           <Back/>
           <div class="user">
               <p class="photo"><img :src="src" ></p>
               <p :name></p>
           </div>
       </div>
        
    </div>
</template>
<script>
import Back from "@/components/Back";
export default {
     name:"attention",
     components:{
         Back
     },
     data(){
        return{ 
            value: 3,
        }
    },
    
}
</script>
<style scoped>
.box{width: 100%;height: 6.2rem;}
.top{
    width: 100%;
    height: 0.5rem;
    /* background-color: rgb(228, 155, 155); */
    position: fixed;
    top:0;
    background-color: #fff;
    text-align: center;
    display: flex;
}
.photo{width: 0.3rem; height: 0.3rem;border-radius:50% ;}
.title{width: 20%;height: 100%;margin-left: 0.1rem;}
.header img{
    width: 0.3rem;
    height: 0.3rem;
    margin:0.1rem 0.1rem;
}
.header .home{
    font-size: 20px;
    position: absolute;
    top:10px;
    left: 90px;

}
.header .pay{
    width: 67px;
    height: 25px;
    color: orange;
    /* background-color: #dfdfe1; */
    border: orange 1px solid;
    border-radius: 50px;
    padding-top: 4px;
    position: absolute;
    left:240px;
    top:8px;
}
.header .share{
    font-size: 30px;
    position: absolute;
    left: 327px;
    top:10px;
}
.image{
    width: 100%;
    height: 297px;
    
}
.image img{
    width: 100%;
    height: 297px;
}
 .image .text{
     font-size: 18px;
     font-weight: bold;
     text-align: left;
     margin-top: 10px;
     margin-bottom: 10px;
 }
 .image .text1{
     text-align: left;
 }
  .mark{
    position: absolute;
    left:0px;
    top:570px;
    display: flex;
 }
 .mark p{
     font-size: 18px;
 }
 .done{
   font-size: 28px;
  margin-left: 10px;

 }
 .taste {
     display: flex;
     position: absolute;
     top:600px; 
 }
 .taste p:nth-child(1){
     margin-left: 0px;
 }
.taste p:nth-child(2){
     margin-left: 10px;
 }
.taste p:nth-child(3){
     margin-left: 10px;
 }
 .taste p:nth-child(4){
     margin-left: 10px;
 }
 .epigraphy{
     width: 97%;
     height: 188px;
     border: 1px solid grey;
     border-radius: 20px;
     position: absolute;
     top:638px;
     left:3px;
 }
.epigraphy img{
    position: absolute;
    left:13px;
    top:15px;
    border-radius: 10px;
}
.epigraphy .hot{
    font-size: 20px;
    position: absolute;
    left:91px;
    top:12px;
}
.epigraphy .grade{
    font-size:20px ;
    position: absolute;
    left: 91px;
    top:40px;
}
.epigraphy .dalian{
    position: absolute;
    left:91px ;
    top:64px;
}
.epigraphy .star{
    position: absolute;
    left:300px;
    top:40px;
    font-size: 20px;
}
.epigraphy .number{
    position: absolute;
    left: 325px;
    top: 42px;
}
.epigraphy .wire{
    color: rgb(214, 68, 68);
    position: absolute;
    top: 100px;
}
.epigraphy .draw{
    width: 20px;
    height: 20px;
    color: white;
    background-color: orangered;
    position: absolute;
    top: 100px;
    left: 17px;
}
.epigraphy .tickets{
     position: absolute;
     top: 99px;
     left: 46px;
     color: grey;

}
.epigraphy .img{
    width: 40px;
    height: 40px;
    position: absolute;
     top: 135px;
     left: 17px;
     border-radius: 10px;
}
.epigraphy .adult{
     position: absolute;
     top: 133px;
     left: 70px;
}
.epigraphy .money{
     position: absolute;
     top: 157px;
     left: 70px;
     color: orangered;
}
.epigraphy .sold{
     position: absolute;
     top: 157px;
     left: 263px;
     color: grey;
}
.comments{
    width: 100%;
    height: 350px;
    position: relative;
    top: 548px;
    left: 0;
    text-align: left;
}
.comments .area{
    font-size:20px ;
}
.comments .head{
    width: 35px;
    height: 35px;
    background-color: #dfdee3;
    border-radius: 50px;
    position: relative;
    position: absolute;
    left:7px;
    top:41px;
    border:1px solid rgb(199, 197, 197);
}
.comments .head img{
     position: absolute;
     left:7px;
     top:9px;
}
.comments .talk{
    width: 300px;
    height: 30px;
    border-radius: 20px;
    position: absolute;
    left:56px;
    top:43px;
    background-color: #dfdee3;
    border:1px solid rgb(199, 197, 197);
}
.comments img{
    position: absolute;
    left: 134px;
    top:151px;
}
.comments .exist{
      position: absolute;
      left: 102px;
      top:267px;
}
.foot{
    position: fixed;
    left: 0px;
    top :616px;
    background-color: #fff;
    width: 100%;
    height: 50px;
    

    
}
.foot .talk1{
    width: 200px;
    height: 30px;
    border-radius: 20px;
    position: absolute;
    left:12px;
    top:9px;
    background-color: #dfdee3;
    border:1px solid rgb(199, 197, 197);
}
.foot .praise{
    font-size:30px;
    position: absolute;
    left:235px;
    top:12px;
}
.foot .llect{
    font-size:28px;
    position: absolute;
    left:286px;
    top:12px;
}
.foot .note{
    font-size:30px;
    position: absolute;
    left:334px;
    top:12px;
}
.foot .p1{
    position: absolute;
    left:265px;
    top:25px;   
}
.foot .p2{
    position: absolute;
    left:314px;
    top:25px;   
}
</style>

