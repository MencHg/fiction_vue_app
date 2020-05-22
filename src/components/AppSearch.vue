<template>
  <section class="app-search">
    <BasicSearchBox
      @blur="isFocus($event)"
      @focus="isFocus($event)"
      :isRouter="true"
      v-model="keywords"
      @search="searchClick"
    />
    <ul :class="['srach-history',{'search-active':!historyActive}]">
      <li class="search-tag" v-if="!historyList.length">记录为空</li>
      <li class="search-tag" v-for="(item,index) in historyList" :key="index">
        <p class="tag-text" @click="historySearch(item)">{{item}}</p>
        <i class="iconfont" @click="clearHistory(item)">x</i>
      </li>
    </ul>
    <ul class="search-list">
      <li class="list-space" v-if="!searchList.length">
        <p class="tag-title">热门搜索:</p>
        <span
          class="tag-text"
          @click="historySearch(item)"
          v-for="(item,index) in historyList"
          :key="index"
        >{{item}}</span>
      </li>
      <li class="list-item" v-for="(item,index) in searchList" :key="index">
        <div class="cover-img">
          <router-link :to="{  path:'chapterlist',  query:{ list: item.link} }">
            <img :src="item.cover_image" alt srcset />
          </router-link>
        </div>
        <div class="cover-info">
          <h3 class="info-title">{{item.title}}</h3>
          <router-link :to="{  path:'chapterlist',  query:{ list: item.link} }">
            <span class="info-auth">{{item.auth}}</span>
            <p class="info-desc">{{item.desc}}</p>
            <p class="info-last">
              <span class="last-title">更新至:</span>
              <span class="last-count">{{item.article_count}}</span>
            </p>
          </router-link>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
import BasicSearchBox from "./basic/BasicSearchBox";
export default {
  name: "app-search",
  components: {
    BasicSearchBox
  },
  data: () => ({
    keywords: "",
    historyActive: false,
    searchList: [],
    historyList: ["秦时明月", "美女总裁", "霸道总裁", "不败战神"]
  }),
  watch: {},
  filters: {},
  created() {},
  methods: {
    isFocus(event) {
      this.historyActive = !this.historyActive;
    },
    clearHistory(historyKey) {
      this.historyList.forEach((el, index) => {
        if (el === historyKey) {
          this.historyList.splice(index, 1);
          console.log(this.historyList);
        }
      });
    },
    historySearch(historyKey) {
      this.keywords = historyKey;
      this.searchClick();
    },
    searchClick() {
      this.historyActive = false;
      if (this.keywords === "") return;
      this.axios
        .post("/fiction/search", { keywords: this.keywords })
        .then(res => {
          this.searchList = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.app-search {
  position: relative;
  height: 100%;
  .srach-history {
    position: absolute;
    top: 43px;
    left: 21%;
    width: 58%;
    height: 2.3rem;
    overflow-y: auto;
    box-sizing: border-box;
    background-color: #fff;
    padding: 8px 4px;
    border: 1px solid #eeeeee;
    transition: 0.2s;
    .search-tag {
      margin-bottom: 2px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 2px;
      background-color: #eee;
      font-size: 0.15rem;
      p,
      .iconfont {
        padding: 0.06rem;
      }
      p {
        width: 90%;
      }
      .iconfont {
        width: 10%;
        height: 100%;
        color: red;
        font-size: 0.12rem;
        text-align: center;
      }
    }
  }
  .srach-history.search-active {
    height: 0;
    padding: 0;
    border-color: transparent;
  }
  .list-space {
    padding: 10px;
    .tag-title {
      margin: 0.08rem 0.03rem;
      font-size: 14px;
    }
    .tag-text {
      margin: 0.02rem;
      display: inline-block;
      background-color: #eee;
      padding: 0.02rem 0.04rem;
      border-radius: 4px;
      font-size: 0.16px;
    }
  }
  .search-list {
    box-sizing: border-box;
    overflow-y: auto;
    height: calc(100% - 50px);
    padding: 6px;
    .list-item {
      display: flex;
      justify-content: space-between;
      margin: 4px 0;
      height: 2.39rem;
      .cover-img,
      .cover-info {
        width: 49%;
        height: 100%;
      }
      .cover-img {
        img {
          width: 100%;
          height: 100%;
        }
      }
      .cover-info {
        .info-title {
          padding: 6px 0;
          font-size: 0.16rem;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .info-desc {
          line-height: 1.5;
          font-size: 0.12rem;
          color: #555;
        }
        .info-last {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: 1.5;
          font-size: 0.14rem;
        }
      }
    }
  }
}
</style>