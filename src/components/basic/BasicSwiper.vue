<template>
  <section
    class="swiper"
    @mouseenter="mouseListen('mouseenter')"
    @mouseleave="mouseListen('mouseleave')"
  >
    <ul class="swiper-wrap">
      <li :class="swiperClassList[index]" v-for="(item,index) in swiperList" :key="index">
        <router-link :to="{  path:link,  query:{ id: item.link} }">
          <img :src="item.cover_image" alt />
        </router-link>
      </li>
    </ul>
    <button class="iconfont icon-left-angle pic-btn priv-pic" @click="tabPic('priv')"></button>
    <button class="iconfont icon-arrow-right pic-btn next-pic" @click="tabPic('next')"></button>
  </section>
</template>
<script>
export default {
  name: "swiper",
  props: {
    swiperList: {
      type: Array,
      default: []
    },
    link: String
  },
  data: () => ({
    swiperClassList: [
      "slider-leave-to",
      "slider-fade-enter-active",
      "slider-leave-from",
      "slider-fade-enter"
    ],
    autoplayer: null
  }),
  watch: {
    swiperList() {
      this.initClassName();
      return this.swiperList;
    }
  },
  filters: {},
  created() {
    this.mouseListen();
  },
  methods: {
    //处理鼠标划入状态的方法
    mouseListen(mouseType) {
      switch (mouseType) {
        case "mouseenter":
          clearInterval(this.autoplayer);
          break;
        case "mouseleave":
          this.autoplayer = setInterval(() => {
            this.tabPic("next");
          }, 3000);
          break;
      }
    },
    tabPic(picType) { 
      //切换图片展示的方法
      switch (picType) {
        case "priv":
          this.swiperClassList.push(this.swiperClassList[0]);
          this.swiperClassList.shift();
          break;
        case "next":
          this.swiperClassList.unshift(
            this.swiperClassList[this.swiperClassList.length - 1]
          );
          this.swiperClassList.pop();
          break;
      }
    },
    initClassName() {
      //初始化图片位置的方法
      if (this.swiperList.length > 4) {
        for (let i = 0; i < this.swiperList.length - 4; i++) {
          this.swiperClassList.push("slider-fade-item");
        }
        this.mouseListen("mouseleave");
      } else {
        throw console.error("Error:swiperList length < 4");
        return;
      }
    }
  },
  mounted() {},
  beforeDestroy(){
    //跳转页面前清除定时器
    clearInterval(this.autoplayer);
  }
};
</script>
<style lang="less" scoped>
.swiper {
  position: relative;
  width: 100%;
  height: 1.8rem;
  background-color: #eee;
  li,
  .pic-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.3s;
  }
  .swiper-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    perspective: 800px;
    li {
      width: 1.25rem;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .slider-fade-item {
      z-index: -1;
      left: 30%;
      opacity: 0;
    }
    .slider-leave-from,
    .slider-fade-enter-active,
    .slider-leave-to,
    .slider-fade-enter {
      opacity: 1;
    }
    .slider-leave-to {
      left: 0;
      transform-origin: left;
      transform: rotateY(60deg) translateY(-50%);
    }
    .slider-fade-enter-active {
      left: 20%;
    }
    .slider-leave-from {
      right: 24%;
      transform-origin: right;
      transform: rotateY(-40deg) translateY(-50%);
    }
    .slider-fade-enter {
      right: -0.38rem;
      transform-origin: left;
      transform: rotateY(30deg) translateY(-50%);
    }
  }
  .pic-btn {
    width: 35px;
    height: 35px;
    background-color: rgba(0, 0, 0, 0.24);
    border-radius: 50%;
    text-align: center;
    color: #eeeeee;
  }
  .iconfont {
    font-size: 18px;
  }
  .pic-btn.priv-pic {
    left: 0.08rem;
  }
  .pic-btn.next-pic {
    right: 0.08rem;
  }
}
</style>