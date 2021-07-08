<template>
    <div class="box">
        <Top/>
        <div class="name" v-text="name"></div>
        <div class="scoll">口味：{{1}} 环境：{{1}}服务：{{1}}</div>
        <div class="img"> <img v-for="i in srcs"  :src='i'></div>
        <div class="place" v-><p></p><p></p></div>
        <div class="food"></div>

    </div>
</template>
<script>
import Top from "@/components/Top";
export default {
    	components:{
			 Top
		},
    data(){
        return{
            name:'hi',
            stores:[]
        }

    }
}
</script>
<style scoped>
.box{width: 100%;height: 6.6rem;}
.name{font-weight: bold;width: 90%;height: 0.4rem;margin: 0.2rem auto 0;text-align: left;}
.scoll{width: 90%;height: 0.2rem;margin: auto;text-align: left;}
.img{width: 90%;height: 1.8rem;margin:0.2rem auto;display: flex;justify-content: space-around;background: lightcoral;}
.img img{width: 48%;height: 100%;}
.place{width: 90%;height: 0.6rem;background: gold;margin: auto;}
</style>