<template>
  <section class="category">
      <ul class="category-list">
          <li :class="['category-item',{'category-active':type_count === index}]" v-for="(item,index) in category" :key="index" @click="categoryClick(index)">
              <i :class="['iconfont',item.icon]"></i>
              <span class="item-title">{{item.name}}</span>
          </li>
      </ul>
  </section>
</template>
<script>
export default {
    name:"category",
    props:['category','type_count'],
    methods:{
        categoryClick(index){ 
            this.$emit('click',index);
        }
    }
};
</script>
<style lang="less" scoped>
.category-list{
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 5px;
    border-bottom: 2px solid rgba(238, 238, 238, 0.578);
    border-top: 2px solid rgba(238, 238, 238, 0.578);
    .category-item{
        margin: 3px;
        width: calc(33.3% - 6px);
        line-height: 2;
        background-color: #eee;
        border-radius: 6px;
        text-align: center;
        .iconfont{
            margin:0 2px;
            font-size: 16px;
        }
        .item-title{
            font-size: 14px;
        }
    }
}
.category-active{
    background-color: rgb(216, 216, 216);
    color: #41b881;
}
</style>