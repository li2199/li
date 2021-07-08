<template>
    <div class="top1">
        <div class="top">
            <li>
                <img src="../assets/14.jpg">每日福利
            </li>
            <li>
                <img src="../assets/15.jpg">暖心午餐
            </li>
            <li>
                <img src="../assets/16.jpg">联系客服
            </li>
            <li>
                <img src="../assets/18.jpg">贡献商户信息
            </li>
            <li>
                <img src="../assets/19.jpg">官方认证
            </li>
            <li>
                <img src="../assets/20.jpg">开直播
            </li>
            <li>
                <img src="../assets/21.jpg">发票助手
            </li>
            <li>
                <img src="../assets/22.jpg">美团公益
            </li>
            <li>
                <img src="../assets/23.jpg">诚信分
            </li>
            <li>
                <img src="../assets/24.jpg">合作/招聘
            </li>
            <li>
                <img src="../assets/25.jpg">企业服务
            </li>
        </div>
      
    </div>
</template>
<script>
export default {
	name: "Nav1",
	data() {
		return {}
	}
}
</script>
<style scoped>
.top1{
    width: 100%;
    height: 2.1rem;
    /* background-color: orange; */
}
.top{
    width: 95%;
    height: 2.1rem;
    background-color: white;
    margin:.08rem auto;
    border-radius: .1rem;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 2px 5px 20px 5px gainsboro;
}
.top li{
    width: 21%;
    height: .45rem;
    /* background-color: hotpink; */
    text-align: center;
    font-size: .12rem;
    margin: .12rem 0.07rem;
    line-height: .3rem;
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