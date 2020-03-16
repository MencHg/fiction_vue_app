<template>
  <div class="category-wrap">
    <section class="category">
      <nav class="navigator">
       <BasicCategory :category="category" :type_count="type_count" @click="categoryEv($event)" />
      </nav>
      <ul class="category-list">
        <li class="list-item" v-for="(item,index) in list" :key="index" @click="()=>{$router.push({  path:'chapterlist',  query:{ list: item.link} })}">
          <img class="item-image" :src="item.cover_image" alt="coverimage" />
          <div class="item-intro">
            <h4 class="item-title">
              <span :style="{'color':index<10 ? 'red' : ''}">{{index+1}} </span>
              {{item.title}}
            </h4>
            <p class="item-author">{{item.author}}</p>
            <p class="item-desc">
              {{item.desc | textSlice}}
            </p>
            <p class="item-count">{{item.article_count}}</p>
          </div>
        </li>
      </ul>
    </section>
    <p class="find-more" v-if="list.length" @click="findMore">{{findText}}</p>
  </div>
</template>
<script>
import BasicCategory from '@/components/basic/BasicCategory';
export default {
  name: 'category',
  components: {
    BasicCategory
  },
  data:()=>({
    list: [],
    findText:"查看更多",
    banners:[],
    bannerActive:0,
    type_count:0,
    page_count:1,
    page_number:0,
    category:[
          {
              name: "玄幻魔法",
              typeid: "fenlei1/",
              icon:"icon-mofabang"
          },
          {
              name: "武侠修真",
              typeid: "fenlei2/",
              icon:"icon-gufengwujianzhongguofenggudaibingqijiangujian_huaban_huaban"
          },
          {
              name: "都市言情",
              typeid: "fenlei3/",
              icon:"icon-chengshijianzhu"
          },
          {
              name: "历史军事",
              typeid: "fenlei4/",
              icon:"icon-feiji"
          },
          {
              name: "网游动漫",
              typeid: "fenlei6/",
              icon:"icon-webzichan"
          },
          {
              name: "科幻小说",
              typeid: "fenlei7/",
              icon:"icon-keji1"
          },
          {
              name: "最新更新",
              typeid: "lastupdate/",
              icon:"icon-zuixin1"
          },
          {
              name: "点击总榜",
              typeid: "allvisit/",
              icon:"icon-zuixintaishifenxi"
          },
          {
              name: "全本小说",
              typeid: "quanben/",
              icon:"icon-books"
          },
      ],
  }),
  created(){
    this.getData(this.category[this.type_count].typeid,this.page_count);
  },
  filters:{
    textSlice(val){
      return val.slice(50) + '...';
    }
  },
  methods: {
    findMore(){
      if(this.page_count === this.page_number){
        this.findText = "没有更多数据了";
        return;
      }
      this.page_count++;
      this.getData(this.category[this.type_count].typeid,this.page_count);
    },
    categoryEv(ev){
      if(this.type_count === ev) return;
      this.page_count = 1;
      this.type_count = ev;
      this.list = [];
      this.getData(this.category[this.type_count].typeid,this.page_count);
    },
    getData(typeid,page) {
      console.log(typeid,page);
      
      this.axios.get('/api/qqxs/category?typeid='+typeid+'&page='+page)
        .then((respons) => {
          this.list.push(...respons.data.list);
          this.page_number = respons.data.number;
        }).catch((err) => {
          console.log('tag', err);
        });
    },
  },
}
</script>
<style lang="less" scoped>
.category-wrap{
  .category{
    .navigator{
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      padding: 3px 15px;
      .nav-item{
        width: 100%;
        line-height: 2;
        background-color: transparent;
        outline: none;
        border: none;
        color: #06060683;
        font-weight: bold;
        &:active{
          filter: blur(2px);
        }
      }
      .nav-item-active{
        color: #ff6666;
      }
    }
    .category-title{
      box-sizing: border-box;
      line-height: 1.8;
      padding:3px 10px;
      border-bottom: 1px solid #eee;
      font-size: var(--fontdesc);
      font-weight: bold;
    }
    .category-list{
      box-sizing: border-box;
      padding: 10px;
      .list-item{
        margin-bottom: 5px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        line-height: 1.8;
        font-size: 13px;
        .item-image{
          width: 140px;
          height: 200px;
        }
        .item-intro{
          box-sizing: border-box;
          width: calc(100% - 140px);
          padding: 2px 8px;
          .item-title{
            font-size: 15px;
            font-weight: bold;
            span{
              font-weight: bold;
            }
          }
          .item-author,.item-count{
            color: #aaa;
            font-size: 12px;
          }
          .item-desc{
            overflow-x: hidden;
            color: #444;
          }
        }
        
      }
    }
  }
  .find-more{
    padding: 10px 0 15px;
    background-color: rgba(238, 238, 238, 0.479);
    text-align: center;
    font-size: 15px;
    color: #444;
    
  }
}
</style>
