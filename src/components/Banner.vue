<template>
    <div class="top1">
        <div class="top">
            <li>
                <div class="li-left"><img src="../assets/03.jpg"></div>
                <div class="li-right">
                    <div class="li-top">会员等级</div>
                    <div class="li-bot">写评价助升级</div>
                </div>
            </li>
            <p class="hr"></p>
            <li>
                <div class="li-left"><img src="../assets/04.jpg"></div>
                <div class="li-right">
                    <div class="li-top">VIP俱乐部</div>
                    <div class="li-bot">写评价领特权</div>
                </div>
            </li>
            <p class="hr"></p>
            <li>
                <div class="li-left"><img src="../assets/05.jpg"></div>
                <div class="li-right">
                    <div class="li-top">笔记达人中心</div>
                    <div class="li-bot">写笔记做达人</div>
                </div>
            </li>
        </div>
    </div>
        
</template>
<script>
export default {
	name: "Banner",
	data() {
		return {}
	}
}
</script>
<style scoped>
.top1{
    width: 100%;
    height: 0.7rem;
    background-color: orange;
}
.top{
    width: 95%;
    height: 0.6rem;
    background-color: white;
    margin: auto;
    border-radius: .1rem;
    display: flex;
}
li{
    width: 33%;
    height: .6rem;
    /* background-color: palegoldenrod; */
    display: flex;
}
li img{
    padding-left: .05rem;
}
.li-left{
    margin: auto;
}
.li-right{
    font-size: .13rem;
    margin: auto;
    font-weight: bold;
}
.li-bot{
    font-size: 0.08rem;
    color: gray;
    font-weight: normal;
}
.hr{
    height: .3rem;
    border-right: 1px solid gainsboro;
    margin-top: .15rem;
}
</style>