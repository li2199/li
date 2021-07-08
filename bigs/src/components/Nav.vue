<template>
    <div class="top1">
        <div class="top">
            <li @click="to('Collection')">
                <img src="../assets/06.jpg">
                收藏
            </li>
            <li>
                <img src="../assets/07.jpg">待评价
            </li>
            <li>
                <img src="../assets/08.jpg">最近浏览
            </li>
            <li @click="to('/Caogao') ">
                <img src="../assets/09.jpg">草稿箱
            </li>
            <li @click="to('/Order')">
                <img src="../assets/10.jpg">订单
            </li>
            <li @click="to('/Kajuan')">
                <img src="../assets/11.jpg">卡劵
                <p>专属礼包</p>
            </li>
            <li>
                <img src="../assets/12.jpg">积分
            </li>
            <li @click="to('/Wallet')">
                <img src="../assets/13.jpg">钱包
                <p>进入钱包</p>
            </li>
        </div>
    </div>
</template>
<script>
export default {
	name: "Nav",
	data() {
		return {}
	},
    methods:{
        to(paths){
this.$router.push(paths)
        }

    }
}
</script>
<style scoped>
.top1{
    width: 100%;
    height: 1.55rem;
    /* background-color: orange; */
}
.top{
    width: 95%;
    height: 1.55rem;
    background-color: white;
    margin:.08rem auto;
    border-radius: .1rem;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 2px 5px 20px 5px gainsboro;
}
.top li{
    width: 14%;
    height: .45rem;
    /* background-color: hotpink; */
    text-align: center;
    font-size: .12rem;
    margin: .14rem .195rem;
}
li img{
    display: block;
    width: .24rem;
    height: .24rem;
    margin: auto;
}
p{
    font-size: .09rem;
    color: gray;
}
</style>