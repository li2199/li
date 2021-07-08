
<template>
    <div class="top">
        <Back/>
        <div class="right"><img src="../assets/ha6.png" ><img src="../assets/hac.png" ><img src="../assets/ha9.png" ></div>
        </div>
</template>
<script>
import Back from "@/components/Back";
export default {
   name:'Top',
   	components:{
			Back
		},
}
</script>
<style scoped>
.top{width:100%;height: 0.4rem;margin: auto;display: flex;justify-content: space-between;position: fixed;top: 0;z-index: 99;background-color: #fff;}
.right{width: 50%;height: 100%;display: flex;margin-top: 0.07rem;justify-content: space-around;}
.right img{width: 15%;height: 70%;}</style>

