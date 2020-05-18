<template>
  <article :class="['detail','page-blank',theme.theme]" :style="{'font-size':fontSize+'px'}">
    <BasicBlank :bgc="theme.bgc" :color="theme.color" />
    <div class="set-app">
      <i class="iconfont icon-web__shezhi" @click="setApp"></i>
      <ul :class="['menu-setapp',{'menu-active':menuActive}]">
        <li class="menu-item">
          字体大小:
          <p class="menu-select">
            <button @click="setFontSize(false)">-</button>
            <span>{{fontSize}}</span>
            <button @click="setFontSize(true)">+</button>
          </p>
        </li>
        <li class="menu-item">
          主题选择:
          <p class="menu-select menu-theme">
            <button
              v-for="(item,index) in themeList"
              :key="index"
              @click="setTheme(item)"
            >{{item.name}}</button>
          </p>
        </li>
      </ul>
    </div>
    <div class="content-wrap" v-for="(item,index) in article" :key="index">
      <h3 class="title-detail">{{item.title}}</h3>
      <p class="content-detail" v-for="(content,i) in item.content" :key="i">{{content}}</p>
      <span class="tips-end">本章完</span>
    </div>
    <p class="detail-btn" v-if="article.length">
      <!-- <button class="detail-select"
      v-if="article[article.length-1].article_prev.slice(-4)==='html'" 
      @click="findMore(article[article.length-1].article_prev)">上一章</button>-->
      <button
        class="detail-select"
        v-if="article[article.length-1].article_next.slice(-4)==='html'"
        @click="findMore(article[article.length-1].article_next)"
      >下一章</button>
    </p>
    <!-- <p class="coment">评论</p> -->
  </article>
</template>
<script>
import BasicBlank from "@/components/basic/BasicBlank";
export default {
  name: "detail",
  components: {
    BasicBlank
  },
  data: () => ({
    article: [],
    menuActive: false,
    fontSize: 16,
    theme: "",
    themeList: [
      {
        name: "默认",
        theme: "default",
        bgc: "#41b881"
      },
      {
        name: "雅黑",
        theme: "gray",
        bgc: "#444a"
      },
      {
        name: "流川",
        theme: "mangosteen",
        bgc: "#aaaa"
      },
      {
        name: "书香",
        theme: "sun",
        bgc: "#aaaa"
      },
      {
        name: "圣诞",
        theme: "songd",
        bgc: "#aaaa"
      },
      {
        name: "护眼",
        theme: "eye",
        bgc: "#aaaa"
      }
    ]
  }),
  watch: {
    fontSize() {
      localStorage.setItem(
        "theme",
        JSON.stringify({ fontSize: this.fontSize, theme: this.theme })
      );
      return this.fontSize;
    },
    theme() {
      localStorage.setItem(
        "theme",
        JSON.stringify({ fontSize: this.fontSize, theme: this.theme })
      );
      return this.theme;
    }
  },
  created() {
    this.getArticleDetail(this.$route.query.link + this.$route.query.id);
    this.initTheme();
  },
  methods: {
    initTheme() {
      if (localStorage.theme) {
        let themeStorege = JSON.parse(localStorage.theme);
        if (themeStorege) {
          this.fontSize = themeStorege.fontSize;
          this.theme = themeStorege.theme;
        } else {
          return;
        }
      }
    },
    setApp() {
      this.menuActive = !this.menuActive;
    },
    setFontSize(status) {
      if (status) {
        this.fontSize < 26 ? this.fontSize++ : (this.fontSize = 26);
      } else {
        this.fontSize > 12 ? this.fontSize-- : (this.fontSize = 12);
      }
      this.$store.dispatch("setFontSize", this.fontSize);
    },
    setTheme(theme) {
      this.theme = theme; //获取到用户选择的主题类型赋值到data
    },
    findMore(val) {
      console.log(val);
      if (val.slice(-10) !== "index.html") {
        this.getArticleDetail(val);
      } else return;
    },
    getArticleDetail(article) {
      this.axios
        .get("/fiction/detail?id=" + article)
        .then(result => {
          console.log(result.data.result);
          this.article.push(result.data.result);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped lang="less">
.detail.mangosteen,
.detail.songd,
.detail.sun,
.detail.default,
.detail.gray {
  .set-app {
    button {
      color: rgb(80, 80, 87);
    }
  }
  button {
    color: inherit;
  }
}
.detail.default {
  background-color: #fff;
  color: #000;
}
.detail.gray {
  background-color: #444;
  color: #eeeeee;
}
.mangosteen::after,.sun::after,.eye::after,.songd::after{
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
}
.detail.mangosteen {
  color: rgb(223, 223, 223);
  &::after {
    content: "";
    background-image: url("http://img1.imgtn.bdimg.com/it/u=1079891450,3194650925&fm=26&gp=0.jpg");
    filter: blur(6px);
  }
}
.detail.sun {
  color: rgb(80, 80, 87);
  &::after {
    content: "";
    background-image: url("http://img0.imgtn.bdimg.com/it/u=1316619747,2950997811&fm=26&gp=0.jpg");
    filter: blur(4px);
  }
}
.detail.eye {
  color: rgb(92, 88, 88);
  &::after {
    content: "";
    background-image: url("http://img3.imgtn.bdimg.com/it/u=3268167055,48134426&fm=26&gp=0.jpg");
    filter: blur(4px);
  }
}
.detail.songd {
  color: rgb(236, 235, 235);
  &::after {
    content: "";
    background-image: url("http://img0.imgtn.bdimg.com/it/u=4121703078,3693471928&fm=26&gp=0.jpg");
    filter: blur(6px);
  }
}
.detail {
  padding-top: 40px;
  .set-app {
    position: absolute;
    z-index: 999;
    right: 0px;
    top: 0px;
    width: 60px;
    height: 45px; 
    line-height: 45px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    .menu-setapp {
      position: absolute;
      top: 40px;
      right: -200px;
      width: 180px;
      height: 500px;
      background-color: rgba(39, 39, 39, 0.493);
      padding: 0 10px;
      font-size: 14px;
      text-align: start;
      transition: all 0.2s;
      .menu-item {
        margin: 5px 0;
        line-height: 1.5;
        .menu-select {
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          padding: 0 15px;
          button {
            width: 20px;
            height: 20px;
            line-height: 1.5;
            background-color: #eee;
            outline: none;
            border: none;
            border-radius: 50%;
          }
        }
        .menu-select.menu-theme {
          align-items: flex-start;
          button {
            margin: 3px;
            width: auto;
            border-radius: 5px;
          }
        }
      }
    }
    .menu-active {
      right: 0px;
    }
  }
  .content-wrap {
    margin-bottom: 30px;
    box-sizing: border-box;
    padding: 10px;
    .tips-end {
      display: inline-block;
      width: 100%;
      padding-top: 30px;
      color: inherit;
      text-align: center;
    }
  }
  .title-detail {
    line-height: 4;
    font-weight: bold;
  }
  .content-detail {
    line-height: 1.8;
    letter-spacing: 3px;
    text-align: justify;
    text-indent: 2em;
    color: inherit;
  }
  .detail-btn {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 20px;
    .detail-select {
      margin: 0 50px;
      outline: none;
      border: none;
      border-radius: 5px;
      &:active {
        filter: blur(2px);
      }
    }
  }
}
</style>