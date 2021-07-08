<template>
    <div class="box">
        <div class="top"><p @click="no" :class="cla">未读消息</p> <p @click="yes" :class="clas">已读消息</p></div>
        <div class="meg" v-show="show" >
            <div v-for="i in data" v-text="i.content" class="meggg" >[] 
            </div>
        </div>
        <div class="meg" v-show="shows" >
            <div v-for="i in datas" v-text="i.content" class="meggg">[] 
            </div>
        </div>
       <Footer/> 
    </div>
    
</template>
<script>
import Footer from "@/components/Footer";
export default {
    name:"Meg",
    components: {
    Footer,
  },
    data(){
        return{
            data:{},
            datas:{},
            show:true,
            shows:false,
            cla:"green",
            clas:''
           
        }
    },
    created(){
        axios({
            url:"http://10.12.151.28//message/myMsgRead/",
            method:"get",
            params:{
                uid:1,
                status:0
            }
        }).then(res=>this.data=res.data.data)
    },
    methods:{
        no(){
            this.shows=false;
            this.show=true;
            this.cla='green';
            this.clas='wit'
           
        },
        yes(){ 
            axios({
            url:"http://10.12.151.28/message/myMsgRead/",
            method:"get",
            params:{
                uid:1,
                status:1
            }
        }).then(res=>{
             if (res.data.msg == "success" && res.data.code == "200"){
            this.shows=true;
            this.show=false;
            this.clas='green';
            this.cla='wit';
            this.datas=res.data.data
             }
            
            })
           
           
        }
    }
    
}
</script>
<style scoped>
.box{width: 100%;height: 6.6rem;position: relative;}
.top{text-align: center;width: 90%;height: 0.3rem;display: flex;margin:0.2rem auto 0;}
.top p{width: 50%;height: 100%;}
.meg{width: 90%;height: 5rem;position: absolute;top: 0.3rem;left: 5%;}
.meggg{width: 80%;margin: auto;margin-top: 0.1rem;}
.wit{background-color: #fff;}
</style>