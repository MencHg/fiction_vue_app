<template>
  <div class="home">
    <div class="banner">
      <ul class="swiper-container">
        <li
          :class="['swiper-item',{'swiper-item-active':bannerActive === index}]"
          v-for="(item,index) in banners"
          :key="index"
        >
          <router-link :to="{  path:'chapterlist',  query:{ list: item.link} }">
            <img :src="item.cover_image" :alt="item.title" />
            <span class="item-title">{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <section class="comment">
      <h2 class="comment-title">热门推荐</h2>
      <ul class="comment-list">
        <li class="list-item" v-for="(item,index) in list" :key="index">
          <router-link :to="{  path:'chapterlist',  query:{ list: item.link} }">
            <span :style="{'color':index<10 ? 'red' : ''}">{{index+1}}</span>
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      list: [],
      banners: [],
      bannerActive: 0
    };
  },
  created() {
    this.getData();
    // this.getBannerList();
  },
  methods: {
    getData() {
      this.axios("/api/qqxs/home")
        .then(result => {
          this.list = result.data.top;
          this.banners = result.data.homeHead;
          console.log(result.data)
        })
        .catch(err => {});
    },
    swiperAutoplay() {
      setInterval(() => {
        this.bannerActive < this.banners.length
          ? this.bannerActive++
          : (this.bannerActive = 0);
      }, 3000);
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  .banner {
    width: 100%;
    height: 200px;
    background-color: #eee;
    .swiper-container {
      position: relative;
      width: 100%;
      height: 100%;
      .swiper-item,
      a,
      img {
        width: 100%;
        height: 100%;
      }
      .swiper-item {
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s;
      }
      .item-title {
        position: absolute;
        bottom: 10px;
        left: 20px;
        line-height: 1.8;
        background-color: #06060683;
        padding: 1px 12px;
        border-radius: 4px;
        color: #eee;
        font-size: 14px;
        font-weight: bold;
      }
      .swiper-item-active {
        visibility: visible;
        opacity: 1;
      }
    }
  }
  .comment {
    .comment-title {
      box-sizing: border-box;
      line-height: 1.8;
      padding: 3px 10px;
      border-bottom: 1px solid #eee;
      font-size: 15px;
      font-weight: bold;
    }
    .comment-list {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      box-sizing: border-box;
      padding: 10px;
      .list-item {
        width: 50%;
        line-height: 1.8;
        font-size: 13px;
        span {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
