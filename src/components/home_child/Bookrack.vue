<template>
  <section class="book-rack">
    <div class="tab-container">
      <BasicTabbar :tabBar="tabBar" :tabActive="tabActive" @tabClick="tabClick" />
    </div>
    <div class="book-container">
      <div class="book-position" :style="{'left': tabActive * -100 + '%'}">
        <div class="item-container" v-for="(item,index) in bookRack" :key="index">
          <div class="item-child">
            <img src="@/assets/logo-yushu.png" alt class="article-cover" />
            {{index}}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BasicTabbar from "../basic/BasicTabbar";
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
      },
      {
        name: "历史记录",
        link: "history",
        icon: "icon-lishijilu"
      },
      {
        name: "最近章节",
        link: "lately",
        icon: "icon-shoucang5"
      }
    ],
    bookRack: [
      {
        link: "bookrack",
        children: []
      },
      {
        link: "history",
        children: []
      },
      {
        link: "lately",
        children: []
      }
    ]
  }),
  watch: {},
  filters: {},
  created() {},
  methods: {
    tabClick(key) {
      this.tabActive = key;
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.book-rack {
  height: 100%;
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
      .item-container{
        float: left;
        overflow-y: auto;
        height: 100%;
        width: 33.3%;
        .item-child{
          width: 100%;
          img{
            width: 50%;
          }
        }
      }
    }
  }
}
</style>