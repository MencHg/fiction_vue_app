<template>
  <section class="discover">
    <section class="search">
      <article class="search-wrap">
        <input class="search-input" type="text" placeholder="书名/作者" v-model="keywords" />
        <button class="search-btn" @click="search()">搜索</button>
      </article>
    </section>
    <p class="search-noresult" v-show="!list.length">
      <span>暂无搜索结果</span>
    </p>
    <ul class="search-list">
      <li class="list-item" v-for="(item,index) in list" :key="index">
        <router-link :to="{path:'chapterlist',query:{list:item.link}}">
          <img class="item-discover" :src="item.cover_image" alt="coverImage" />
        </router-link>
        <div class="item-text">
          <router-link :to="{path:'chapterlist',query:{list:item.link}}">
            <h4 class="item-title">{{item.title}}</h4>
            <p class="item-desc">{{item.desc}}</p>
            <p class="item-desc">{{item.author}}</p>
            <p class="item-desc">{{item.article_count}}</p>
          </router-link>
        </div>
      </li>
    </ul>
  </section>
</template>
    name:"discover"
<script>
export default {
  name: "discover",
  data: () => ({
    list: [],
    keywords: ""
  }),
  methods: {
    search() {
      this.axios
        .post("/qqxs/search",{keywords:this.keywords})
        .then(result => {
          this.list = result.data.list;
          console.log(this.list)
        })
        .catch(err => {});
    }
  }
};
</script>
<style lang="less" scoped>
.discover {
  .search-noresult {
    line-height: 2;
    text-align: center;
  }
  .search {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 150px;
    background-image: linear-gradient(
      45deg,
      #d10b46c7 10%,
      rgba(111, 47, 240, 0.747) 30%,
      rgba(255, 140, 0, 0.76) 50%,
      #41b881bb 90%
    );
    .search-btn,
    .search-input,
    .search-wrap {
      box-sizing: border-box;
      border-radius: 30px;
    }
    .search-wrap {
      padding: 2px 3px;
      border: 1px solid #dddddd;
      .search-btn,
      .search-input {
        line-height: 2;
        padding: 2px 16px;
        outline: none;
        border: none;
        box-shadow: none;
        color: #eee;
        font-size: 13px;
        font-weight: bold;
        &::placeholder {
          color: #ffffff;
          font-weight: bold;
        }
      }
      &:focus-within {
        box-shadow: 0 0 2px 1px #eee;
      }
      .search-input {
        width: 160px;
      }
      .search-btn {
        background-color: #323202;
        color: #eee;
        &:active {
          filter: blur(2px);
        }
      }
    }
  }
  .search-list {
    background-color: #fff;
    .list-item {
      box-sizing: border-box;
      display: flex;
      margin: 2px;
      justify-content: space-between;
      background-color: #eee;
      padding: 9px;
      a{
        width: 40%;
        .item-discover {
          width: 100%;
        }
      }
      
      .item-text {
        box-sizing: border-box;
        width: 60%;
        padding: 0 8px;
        .item-title {
          line-height: 2;
          font-weight: bold;
          font-size: 15px;
        }
        .item-desc {
          line-height: 1.5;
          font-size: 14px;
          color: #323202;
        }
      }
    }
  }
}
</style>