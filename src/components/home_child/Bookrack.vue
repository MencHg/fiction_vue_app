<template>
  <section class="book-rack">
    <!-- <BasicSliderSwiper /> -->
    <div class="banner-cloud">
      <a href="https://url.cn/DgmDhEbM" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/img/cloud-tencent.jpg" alt />
      </a>
    </div>
    <div class="tab-container">
      <BasicTabbar :tabBar="tabBar" :tabActive="tabActive" @tabClick="tabClick" />
    </div>
    <div class="book-container">
      <div class="book-position" :style="{'left': tabActive * -100 + '%'}">
        <ul class="item-container" v-for="(item,index) in bookRack" :key="index">
          <li class="item-child">
            <span v-if="bookRack" class="boorack-tag">{{bookRack.tips}}</span>
            <!-- <img src="@/assets/logo-yushu.png" alt class="article-cover" />
            {{index}}-->
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import BasicTabbar from "../basic/BasicLineTab.vue";
export default {
  name: "book-rack",
  components: {
    BasicTabbar
  },
  data: () => ({
    tabActive: 0,
    tabBar: [
      {
        name: "书架收藏",
        link: "bookrack",
        icon: "icon-jiaoshi_shujia"
      }
      // {
      //   name: "历史记录",
      //   link: "history",
      //   icon: "icon-lishijilu"
      // },
      // {
      //   name: "最近章节",
      //   link: "lately",
      //   icon: "icon-shoucang5"
      // }
    ],
    bookRack: {
      link: "bookrack",
      tips: "暂无记录",
      children: []
    }
  }),
  watch: {},
  filters: {},
  created() {
    this.getBookRack();
  },
  methods: {
    tabClick(key) {
      this.tabActive = key;
    },
    getBookRack() {
      this.axios
        .post("/fiction/find/bookrack")
        .then(result => {
          console.log(result);
          this.bookRack.tips = "";
        })
        .catch(err => {
          console.log(err.response.status);
          this.bookRack.tips = "您还没有登录，不能使用该功能哟！~";
        });
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.book-rack {
  height: 100%;
  .banner-cloud {
    height: 1.7rem;
    a {
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .tab-container {
    box-sizing: border-box;
    background-color: #eee;
  }
  .book-container {
    position: relative;
    overflow-x: hidden;
    height: calc(100% - 45px);
    .book-position {
      position: absolute;
      top: 2px;
      height: 100%;
      width: 300%;
      transition: 0.2s;
      .item-container {
        float: left;
        overflow-y: auto;
        height: 100%;
        width: 33.3%;
        .boorack-tag {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 1.2rem;
          font-size: 0.14rem;
          color: #666;
        }
        .item-child {
          width: 100%;
          img {
            width: 50%;
          }
        }
      }
    }
  }
}
</style>