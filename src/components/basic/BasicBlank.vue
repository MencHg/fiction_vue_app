<template>
  <div class="blank" :style="{'background-color':bgc,'color':color}">
    <button class="blank-btn" @click="$router.go(-1)">
      <i class="iconfont icon-fanhui1"></i>
      <span>返回</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "blank",
  props: {
    bgc: {
      type: String,
      default: "#41b881"
    },
    color: {
      type: String,
      default: "#fff"
    }
  }
};
</script>
<style lang="less" scoped>
.blank {
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  .blank-btn {
    width: 100px;
    height: 100%;
    outline: none;
    background-color: transparent;
    padding: 0 8px;
    text-align: start;
    border: none;
    color: inherit;
    .iconfont,
    span {
      vertical-align: middle;
    }
    .iconfont {
      padding-right: 6px;
      font-size: 22px;
    }
    span {
      font-size: 12px;
    }
  }
}
</style>