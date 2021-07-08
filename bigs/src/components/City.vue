<template>
    <div class="city" v-show="str">
        <select v-model="city" @change="checkcity(value)">
          <option v-for="(value,key) in citys"  v-text="value.city"></option>
        </select>
      </div>
</template>
<script>
export default {
    name:"City",
     data(){
        return{
            city:"西安",
            citys:[],
    }
},
props:{
       str:{
            type:Boolean,
            default:false
        },
methods:{
    checkcity(){
      this.city=value
    }  
},
created(){
   axios({
        url:"http://10.12.151.28//city/findAll",
        method:"get",
					}           
        )
        .then(res=> this.citys=res.data.data);
}
}
} 
</script>
<style scoped>
.city {
  width: 90%;
  height: 0.4rem;
  margin: auto;
}
select {
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0.2rem;
  border: none;
  outline: none;
  float: right;
}

</style>