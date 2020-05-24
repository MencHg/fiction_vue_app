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
      <button 
        :class="['intro-lately',{'read-lately':item.lately.title === '无记录'}]"
        :disabled="item.lately.title === '无记录'"
        @click="latelyRead(item.lately.id)">
        {{item.lately.title}}
      </button>
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
  methods:{
    latelyRead(item){
      let hash =  item.split('/')
      this.$router.push({
        path:"detail",
        query:{link:`${hash[2]}`,id:`${hash[0]}/${hash[1]}/`}
      }).catch(err=>console.log(err));
    }
  }
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
    position: relative;
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
      position: absolute;
      bottom: 0.04rem;
      left: 0;
      width: 1.2rem;
      padding: 0.03rem 0.1rem;
      background-color: #41b881;
      border-radius: 0.15rem;
      outline: none;
      border: none;
      font-size: 0.12rem;
      color: #eeeeee;
    }
    .read-lately{
      background-color: #eeeeee;
      color: #555;
    }
  }
}
</style>