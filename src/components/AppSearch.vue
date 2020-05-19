<template>
  <section class="app-search">
    <!-- <BasicBlank /> -->
    <BasicSearchBox :isRouter="true" v-model="keywords" @search="searchClick" />
    <div class="srach-history"></div>
    <ul class="search-list">
      <li class="list-item" v-for="(item,index) in searchList" :key="index">
        <div class="cover-img">
          <img :src="item.cover_image" alt="" srcset="">
        </div>
        <div class="cover-info">
          <h3 class="info-title">{{item.title}}</h3>
          <span class="info-auth">{{item.auth}}</span>
          <p class="info-desc">{{item.desc}}</p>
          <p class="info-last">
            更新至: <br>
            {{item.article_count}}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
import BasicSearchBox from './basic/BasicSearchBox'
export default {
  name: "app-search",
  components: {
    BasicSearchBox,
  },
  data: () => ({
    keywords:"",
    searchList:[]
  }),
  watch: {

  },
  filters: {

  },
  created() {

  },
  methods: {
    searchClick(){
      console.log(this.keywords);
      this.axios.post('/fiction/search',{keywords:this.keywords})
        .then(res=>{
          console.log(res);
          this.searchList = res.data.list;
        })
        .catch(err=>{
          console.log(err);
          
        })
    },
  },
  mounted(){

  },
};
</script>
<style lang="less" scoped>
 .app-search{
   position: relative;
   height: 100%;
  //  padding-top: 0.55rem;
  .search-list{
    box-sizing: border-box;
    overflow-y: auto;
    height: calc(100% - 50px);
    padding: 6px;
    .list-item{
      display: flex;
      justify-content: space-between;
      margin: 4px 0;
      height: 2.39rem;
      .cover-img,.cover-info{
        width: 49%;
        height: 100%;
      }
      .cover-img{
        img{
          width: 100%;
          height: 100%;
        }
      }
      .cover-info{
        .info-title{
          padding: 6px 0 ;
          font-size: 0.16rem;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .info-desc{
          line-height: 1.5;
          font-size: 0.12rem;
          color: #555;
        }
        .info-last{
          line-height: 1.5;
          font-size: 0.14rem;
        }
      }
    }
  }
 } 
</style>