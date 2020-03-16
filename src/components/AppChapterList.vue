<template>
  <section class="chapterlist" v-show="article.cover_image">
    <BasicBlank />
    <div class="article-intro">
      <article class="intro-head">
        <img :src="article.cover_image" alt class="intro-image" />
        <div class="intro-author">
          <h2 class="article-title">{{article.article_title}}</h2>
          <p class="article-author">
            <span>作者:</span>
            {{article.author}}
          </p>
          <p class="article-status">{{article.article_status}}</p>
        </div>
      </article>
      <article class="intro-text">
        {{article.article_intro}}
      </article>
    </div>
    <article class="article-list">
      <h3 class="list-title">相关推荐</h3>
      <ul class="recomment-list">
        <li
          class="list-item"
          v-for="(item,index) in article.recomment"
          :key="index"
          @click="comment(item)"
        >{{item.title}}</li>
      </ul>
      <h2 class="list-title">正文列表</h2>
      <ul class="list-wrap">
        <li
          class="list-item"
          v-for="(item,index) in article.article_list"
          :key="index"
          @click="isVip(item)"
        >
          <i class="iconfont icon-VIP" v-if="item.name_count>1"></i>
          <span>{{item.title}}</span>
          <!-- <router-link :to="{  path:'detail', query:{ id:item.link} }">{{item.title}}</router-link> -->
        </li>
      </ul>
    </article>
  </section>
</template>
<script>
import BasicBlank from "./basic/BasicBlank";
export default {
  name: "chapterlist",
  components: {
    BasicBlank
  },
  data: () => ({
    article: {},
    linkId: ""
  }),
  created() {
    this.getArticleList(this.$route.query);
    console.log(this.$route.query)
  },
  methods: {
    comment(item) {
      this.getArticleList({ list: item.link });
    },
    isVip(val) {
      this.$router.push({
        path: "detail",
        query: { id: val.link, link: this.linkId }
      });
    },
    getArticleList(url) {
      this.article = {};
      this.linkId = url.list;
      console.log(this.linkId);
      this.axios
        .get("/api/qqxs/chaplist?id="+this.linkId)
        .then(result => {
          this.article = result.data.articleList;
          console.log(this.article);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.chapterlist {
  padding-top: 40px;
  .article-intro {
    background-color: #f5f5f5d7;
    font-size: 16px;
    .intro-head {
      display: flex;
      justify-content: space-between;
      background-image: linear-gradient(
        to bottom,
        #41b881 0%,
        #41b881 60%,
        transparent 60%,
        transparent 100%
      );
      padding: 10px;
      color: #ddd;
      .intro-image {
        width: 180px;
        vertical-align: middle;
      }
      .intro-author {
        padding-left: 10px;
        .article-title {
          line-height: 2;
          font-size: 20px;
          font-weight: bold;
          color: #eeeeee;
        }
        .article-author {
          line-height: 2;
          font-size: 14px;
          font-weight: 400;
          color: #eeeeee;
        }
        .article-status {
          line-height: 1.3;
          font-size: 12px;
          color: #eeeeee;
        }
      }
    }
    .intro-text {
      line-height: 1.5;
      padding:0 10px 10px;
      text-align: justify;
    }
  }
  .article-list {
    padding:  10px ;
    .recomment-list {
      margin: 10px 0 20px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .list-item {
        margin: 2px;
        line-height: 1.5;
        background-color: #ddd;
        padding: 3px 9px;
        border-radius: 9px;
        font-size: 14px;
        color: #202431;
      }
    }
    .list-title {
      line-height: 2;
      font-weight: bold;
      border-bottom: 1px solid #ddd;
    }
    .list-wrap {
      .list-item {
        line-height: 1.8;
        font-size: 16px;
        .iconfont {
          color: #ff145e;
        }
      }
    }
  }
}
</style>