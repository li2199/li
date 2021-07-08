<template>
  <div class="hot">
    <span v-show="flag">热搜:</span>
    <ul>
      <li v-for="i in hots" @click="handle(i)">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "hotSearch",
  props: {
    flag: {
      type: Boolean,
      default: ()=>true,
    },
      hots: {
        type: Array,
        default: ()=> []
      },
  },
  
  methods: {
    handle(value) {
      this.$emit("titleHadle", value);
    },
  },
};
</script>
<style scoped>
.hot {
  width: 90%;
  height: 0.2rem;
  margin: 0.1rem auto;
  display: flex;
  
}
.hot ul {
  list-style: none;
  width: 85%;
  height: 100%;
  display: flex;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
}
.hot span {
  width: 12%;
  height: 100%;
  display: block;
  padding-bottom: 0.05rem;
}
.hot li {
  width: auto;
  height: 100%;
  margin-left: 0.1rem;
  
}
</style>