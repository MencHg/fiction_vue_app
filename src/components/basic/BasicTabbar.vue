<template>
  <div class="tab-bar">
    <div class="tab-btn">
      <button
        :class="['item',{'active-item':tabActive === index}]"
        v-for="(tab,index) in tabBar"
        :key="index"
        @click="$emit('tabClick',index)"
      >
        <i :class="['iconfont',tab.icon]"></i>
        <span class="item-text">{{tab.name}}</span>
      </button>
    </div>
    <i class="tab-line" :style="{'left':tabActive * 33.4 + '%'}"></i>
  </div>
</template>
<script>
export default {
  name: "tab-bar",
  props:{
    tabActive:Number,
    tabBar:Array
  },
  data: () => ({}),
  watch: {},
  filters: {},
  created() {},
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.tab-bar{
  position: relative;
  // margin: 10px;
  .tab-btn{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;
    background-color: #eee;
    color: #aaa;
    .item{
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: none;
      height: 99%;
      width: 33%;
      font-size: 14px;
      transition: 0.2s;
      .iconfont{
        padding-right: 6px;
        font-size: 20px;
      }
    }
    .active-item{
      color: #41b881;
    }
  }
  .tab-line{
    position: absolute;
    margin: 0 10px;
    bottom: 0;
    width: 30%;
    height: 2px;
    background-color: #41b881;
    transition: 0.2s;
  }
} 
</style>