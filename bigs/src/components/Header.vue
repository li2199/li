<template>
    <div class="box">
        <div class="top"><img src="../assets/01.jpg"></div>
        <div class="left">
            <p><img :src="data.head"></p>
            <div class="mid">
                <div class="mid-top" v-text="data.uname"></div>
                <div class="mid-bot">粉丝{{data.follow}} 关注{{data.follow}}</div>
            </div>
            <div class="peo" @click="page">个人主页&gt;</div>
        </div>
    </div>
</template>
<script>
export default {
	name: "Header",
	data() {
		return {
            data:'',
            srcs:'/img/02.jpg'
        }
	},
    methods:{
        page(){
           this.$router.push('Peo')
         }
    },
    created(){
        axios({
            url:'http://10.12.151.28/OwnPage/getNotesByUid/1',
            methods:'get'
        }).then(res=>{
            this.data=res.data.data
            console.log(this.data)
        })
    }
    
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 1.17rem;
    background-color: orange;
}
.top{
    width: 100%;
    height: 0.5rem;
    /* background-color: orchid; */
    position: relative;
}
.top img{
    width: .25rem;
    height: .23rem;
    position: absolute;
    right: 0px;
    top: .13rem;
}
.left{
    width: 100%;
    height: .47rem;
    /* background-color: greenyellow; */
    display: flex;
}
.left p{
    width: .48rem;
    height: .48rem;
    border-radius: 50%;
    background-color: white;
    margin-left: .13rem;
    position: relative;
}
.left p img{
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
}
.mid{
    /* width: 1.62rem; */
    height: .37rem;
    /* background-color: tomato; */
    font-size: .16rem;
    color: white;
    /* text-align: center; */
    margin-top: 0.05rem;
    margin-left: .1rem;
}
.mid-bot{
    font-size: .12rem;
    color: gainsboro;
}
.peo{
    width: .72rem;
    height: .23rem;
    background-color: gainsboro;
    border-radius: .3rem;
    font-size: .13rem;
    color: white;
    text-align: center;
    line-height: .23rem;
    margin-top: .12rem;
    margin-left: 1.5rem;
    opacity: 0.9;
}
</style>