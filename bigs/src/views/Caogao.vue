<template>
    <div class="box">
    <div class="top">
        <Back/>
        <p>草稿箱</p>
        <p>多选</p>
    </div>
    <div class="txt">草稿在卸载应用/更换手机后可能会丢失，请及时发布哦</div>
    <div v-for="i in data" class="tex" > 
        <h1 v-text="i.title" @click="to()"/>
        <p >{{i.time}}<input type="button" value="删除" @click="del(i.nid)"> </p>
        
    </div>
   </div> 
        
</template>
<script>
import Back from "@/components/Back";

export default {
    name:"Caogao",
	components:{
			Back
		},
       data(){
            return{
                data:[]

           }
       } ,
       methods:{
           to(){

               this.$router.push({ path: '/Add', query: {name:this.data.name,time:this.data.time } })
           },
           del(){
               axios({
                   url:"http://10.12.159.186/notes/drafts/7",
                   method:'get',

               }).then( axios({
               url:'http://10.12.159.186/notes/drafts/7',
               method:'get',

           }).then(res=>this.data=res.data.data))
           }
       },
       created(){
           axios({
               url:'http://10.12.159.186/notes/drafts/7',
               method:'get',

           }).then(res=>{
               this.data=res.data.data
              
               })
       }
        
        
        }
</script>
<style scoped>
.box{width:100%;height:6.2rem}
.top{width:100%;height:0.4rem;display:flex;justify-content: space-around;line-height:0.4rem;box-shadow: 0 0.01rem 0;}
.txt{width:100%;height:0.2rem;color:grey;margin:auto}
.tex{width:90%;height:0.8rem;color:grey;margin: 0.5rem auto;background-color: wheat}
.tex p{width: 100%;height:50%;align-items: center;display: flex;justify-content: space-between;}
.tex input{width: 20%;height: 100%;}

</style>