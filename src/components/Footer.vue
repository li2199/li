<template>

    <div class="foot">
        <ul><li v-for="i in foots"  @click="dos(i.path)">
            <img :src=" srcs+i.img" >
            <span v-text="i.name" ></span>
            </li></ul>
    </div>
</template>
<script>
export default {
    name:'Footer',
    data(){
        return{
            srcs:"/img/",
            foots:[ 
                {name:"首页",
                img:"ho6.png",
                path:'/'
            },
             {name:"地图",
                
                img:"ho8.png",
                path:'/Map'
                
            },
             {
                img:"hod.png",
                path:'/Add'
            },
             {name:"消息",
                path:'/Meg',
                img:"edn.png"
            },
             {name:"我的",
                path:'/My',
                img:"hob.png"
            }

            ]
                

        }
    },
    methods: {
        dos(id){
            this.$router.push(id)

        }
    },
}
</script>
<style scoped>
.foot{width: 100%;position: fixed;bottom: 0;background-color: white;}
.foot ul{width: 100%;display: flex;justify-content: space-evenly;list-style: none;color: grey;font-size: .14rem;}
.foot li{width: 12%;text-align: left;}
.foot img{width:67%;height: 42%;margin-top:0.1rem;display: block;}
.foot li:nth-child(3) img{width:110%;height: 80%;}
</style>