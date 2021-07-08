<template>
  <div class="show">
    <ul>
      <li v-for="i in shows" :style="{'width':wth}" @click="to(i.nid)" >
        <img :src="i.img" class="showimgs" />
        <span v-text="i.title"></span>
        <div class="showimg">
          <p class="headerimg"><img src="/img/02.jpg" /></p>
          <span v-text="i.uname"></span><img src="/img/hf0.png" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Show",
  props:{
    wth:{
       type:String,
    default:'45%'
    },
  shows:{
    type:Array,
    default:()=>[]
  },
  },
  methods:{
    to(val){
       this.$router.push({ path: '/Attention', query: { nid: val } }) 
       console.log(val)
    }
  }
};
</script>
<style scoped>
.show {
  width: 90%;
  margin: 0 auto 1rem;
}
.show ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.show li {
  height: 50%;
  text-align: center;
  margin: 0.08rem;
}
.showimgs {
  width: 100%;
  height: 60%;
}
.showimg {
  width: 100%;
  height: 0.3rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.05rem;
}
.showimg img {
  width: 0.21rem;
  height: 0.21rem;
}
</style>