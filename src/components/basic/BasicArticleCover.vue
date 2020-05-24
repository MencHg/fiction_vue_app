<template>
  <section class="article-cover" v-if="item">
    <div class="article-image">
      <router-link :to="{path:'chapterlist',query:{list:item.bookid}}">
        <img :src="item.cover_image" alt="">
      </router-link>
    </div>
    <div class="article-intro">
      <h3 class="intro-title">{{item.article_title}}</h3>
      <p class="intro-author">作者：{{item.author}}</p>
      <p class="intro-desc">{{item.article_intro}}</p>
      <p class="intro-lately">
        <router-link :to="{path:'detail',query:{link:item.link,id:item.article_id}}">
          {{item.lately}}
        </router-link>
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "article-cover",
  components: {},
  props:{
    item:Object,
    defalut:null
  },
};
</script>
<style lang="less" scoped>
.article-cover {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0.06rem;
  height: 2rem;
  .article-image,
  .article-intro {
    height: 100%;
  }
  .article-image {
    width: 40%;
    a,
    img {
      width: 100%;
      height: 100%;
    }
  }
  .article-intro {
    width: 58%;
    .intro-title,.intro-author,.intro-desc{
      padding-bottom: 0.04rem;
    }
    .intro-title{
      font-size: 0.16rem;
      font-weight: bold;
    }
    .intro-author{
      font-size: 0.14rem;
      color: #555;
    }
    .intro-desc{
      line-height: 1.2;
      font-size: 0.12rem;
      color: #666;
    }
    .intro-lately{
      font-size: 0.14rem;
      a{
        display: inline-block;
        min-width: 0.2rem;
        padding: 0.04rem 0.08rem;
        background-color: #eeeeee;
      }
    }
  }
}
</style>