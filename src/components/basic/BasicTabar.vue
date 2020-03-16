<template>
  <nav class="tabar">
      <router-link class="tabar-item" v-for="(item,index) in navs" :key="index" :to="item.link">
        <i :class="['iconfont',item.icon]"></i>
        <span class="item-name">{{item.name}}</span>
      </router-link>
  </nav>
</template>
<script>
export default {
    name:"tabar",
    props:['navs'],
}
</script>
<style lang="less" scoped>
.tabar{
  display: flex;
  justify-content: center;
  height: 49px;
  background-color: #f2f2f2;
  border-top: 1px solid #eee;
  .tabar-item{
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 13px;
    color: #2c3e50;
    cursor: pointer;
    &.router-link-exact-active {
      color: #42b983;
    }
    .iconfont,.item-name{
      display: block;
      width: 100%;
      font-weight: normal;
    }
    .iconfont{
      padding: 5px 0 5px;
      font-size: 20px;
    }
  }
}
</style>