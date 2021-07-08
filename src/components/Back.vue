<template>
  <div class="back" @click="back()" :style="sty">
    <img :src="src" :style="imgsty" />
  </div>
</template>
<script>
export default {
    name:"Back",
    data(){
        return{
            
        }
    },
    props:{
        sty:{
            type:Object,
            default:()=>{ 
              return{
                width: '0.25rem',
		            height: '0.25rem',
                margin:'0.12rem 0 0.5rem 0.15rem',
              }               
                           
                },
        },
        imgsty:{
             type:Object,
              default:()=>{ 
                return{
                  width:'50%' ,
		          height: '100%',
                }
              
        },
        },
      src:{
        type:String,
              default:'/img/cro.png'
      }  
    },
    methods:{
        back(){
				this.$router.go(-1)
			},
    }
    
}
</script>
