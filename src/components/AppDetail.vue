<template>
 <article :class="['detail',theme.theme]" :style="{'font-size':fontSize+'px'}">
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
          <button v-for="(item,index) in themeList" :key="index" @click="setTheme(item)">{{item.name}}</button>
        </p>
      </li>
    </ul>
   </div>
   <div class="content-wrap" v-for="(item,index) in article" :key="index">
      <h3 class="title-detail">{{item.title}}</h3>
      <p class="content-detail" v-for="(content,i) in item.content" :key="i">
        {{content}}
      </p>
      <span class="tips-end">本章完</span>
   </div>
   <p class="detail-btn" v-if="article.length">
     <!-- <button class="detail-select"
      v-if="article[article.length-1].article_prev.slice(-4)==='html'" 
      @click="findMore(article[article.length-1].article_prev)">上一章</button> -->
     <button class="detail-select" 
     v-if="article[article.length-1].article_next.slice(-4)==='html'" 
     @click="findMore(article[article.length-1].article_next)">下一章</button>
   </p>
  <!-- <p class="coment">评论</p> -->
 </article>
</template>
<script>
import BasicBlank from '@/components/basic/BasicBlank'
export default {
  name: 'detail',
  components:{
    BasicBlank
  },
  data:()=>({
    article:[],
    menuActive:false,
    fontSize:16,
    theme:'',
    themeList:[
      {
        name:"默认",
        theme:"default",
        bgc:"#41b881"
      },
      {
        name:"雅黑",
        theme:"gray",
        bgc:"#444a"
      },
      {
        name:"清幽",
        theme:"userset",
        bgc:"green"
      },
      {
        name:"夕阳",
        theme:"chan",
        bgc:"#aaaa"
      },
    ]
  }),
  created(){
    console.log(this.$route.query.link+this.$route.query.id)
    this.getArticleDetail(this.$route.query.link+this.$route.query.id)
  },
  methods:{
    setApp(){
      console.log('setapp');
      this.menuActive = !this.menuActive;
    },
    setFontSize(status){
      if(status){
        this.fontSize<26?this.fontSize++ : this.fontSize = 26 ;
      }else{
        this.fontSize>12?this.fontSize--:this.fontSize = 12 ;
      }
      this.$store.dispatch('setFontSize',this.fontSize)
    },
    setTheme(theme){
      this.theme = theme; //获取到用户选择的主题类型赋值到data
    },
    findMore(val){
       if(val.slice(-4)==="html"){
         this.getArticleDetail(val);
       }else return;
    },
    getArticleDetail(article){
      this.axios.post('/api/qqxs/article',{
        id:article
      })
        .then((result) => {
          this.article.push(result.data);
        }).catch((err) => {
          console.log(err);
        });
    }
  }
}
</script>
<style scoped lang="less">
.detail.default{
  background-color: #fff;
  color: #000;
}
.detail.gray{
  background-color: #444;
  color: #fff;
} //http://hbimg.b0.upaiyun.com/e573f0b5715470b4ea2462b683ddf8abe43da7b222b95-jOBCvC_fw658
.detail.userset{ //http://hbimg.b0.upaiyun.com/9ea953e5e064a4ca918f4efc7bace30997080d2e5ba2-bzBa1R_fw236
  background-image: url('http://hbimg.b0.upaiyun.com/e573f0b5715470b4ea2462b683ddf8abe43da7b222b95-jOBCvC_fw658');
  background-position: 0 0;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  color: rgb(16, 221, 248);
}
.detail.chan{ //http://hbimg.b0.upaiyun.com/9ea953e5e064a4ca918f4efc7bace30997080d2e5ba2-bzBa1R_fw236
  background-image: url('http://hbimg.b0.upaiyun.com/9ea953e5e064a4ca918f4efc7bace30997080d2e5ba2-bzBa1R_fw236');
  background-position: 0 0;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  color: rgb(103, 103, 196);
}
.detail{
  padding-top: 40px;
  .set-app{
    position: fixed;
    z-index: 999;
    right: 0px;
    top: 0px;
    width: 60px;
    height: 45px;
    line-height: 45px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    .menu-setapp{
      position: absolute;
      top: 40px;
      right: -200px;
      width: 180px;
      height: 500px;
      background-color:rgba(39, 39, 39, 0.493);
      padding:0 10px;
      font-size: 14px;
      text-align: start;
      transition: all 0.2s;
      .menu-item{
        margin: 5px 0;
        line-height: 1.5;
        .menu-select{
          box-sizing: border-box;
          display: flex;
          justify-content:space-between;
          align-items: center;
          flex-wrap: wrap;
          padding: 0 15px;
          button{
            background-color: #eee;
            padding: 2px 6px;
            outline: none;
            border: none;
            border-radius: 50%;
          }
        }
        .menu-select.menu-theme{
          align-items: flex-start;
          button{
            margin: 3px;
            border-radius: 5px;
          }
        }
      }
    }
    .menu-active{
      right: 0px;
    }
  }
  .content-wrap{
    margin-bottom: 30px;
    box-sizing: border-box;
    padding: 10px;
    .tips-end{
      display: inline-block;
      width: 100%;
      padding-top: 30px;
      color: inherit;
      text-align: center;
    }
  }
  .title-detail{
    line-height: 4;
    font-weight: bold;
  }
  .content-detail{
    line-height: 1.8;
    text-align: justify;
    text-indent: 2em;
    color: inherit;
  }
  .detail-btn{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 20px;
    .detail-select{
      margin: 0 50px;
      outline: none;
      border: none;
      border-radius: 5px;
      background-color: #dadada;
      &:active{
        filter: blur(2px);
      }
    }
  }
}
</style>