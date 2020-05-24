
<!-- <router-link :to="{  path:'chapterlist',  query:{ list: item.link} }"> -->
<template>
  <div class="home">
    <BasicSearchBox />
    <div class="banner">
      <BasicSwiper :swiperList="banners" link="chapterlist" />
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
import BasicSearchBox  from '@/components/basic/BasicSearchBox'
import  BasicSwiper from "@/components/basic/BasicSwiper";
export default {
  name: "Home",
  components: {BasicSwiper,BasicSearchBox},
  data() {
    return {
      list: [],
      banners: [],
      bannerActive: 0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getUserinfo(){
      let isToken = window.localStorage.getItem('article_token')  ? true : false;
      if(isToken){
        this.axios.get("/fiction/userinfo")
        .then(result => {
          this.$store.dispatch("setUserinfo", result.data.info);
        })
        .catch(err => console.log(err));
      }
    },
    getData() {
      this.axios("/fiction/home")
        .then(result => {
          this.list = result.data.result.list;
          this.banners = result.data.result.banner;
          this.getUserinfo();
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
        overflow: hidden;
        width: 50%;
        line-height: 1.8;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        span {
          font-weight: bold;
        }
      }
    }
  }
}
</style>

            