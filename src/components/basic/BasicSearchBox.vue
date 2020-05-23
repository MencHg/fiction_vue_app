<template>
  <section class="b-search">
    <div class="search-logo" v-if="!isRouter">
      <img src="@/assets/img/logo-yushu.png" alt />
    </div>
    <button class="search-back" @click="$router.go(-1)" v-if="isRouter">返回</button>
    <div class="search-input">
      <i class="iconfont icon-faxianshebei"></i>
      <input
        v-if="isRouter"
        @focus="$emit('focus',$event.type)"
        @blur="$emit('blur',$event.type)"
        @input="$emit('input',$event.target.value)"
        type="text"
        class="s-input"
        placeholder="书名/作者"
      />
      <router-link class="s-input" v-if="!isRouter" to="/search">
        <button ></button>
      </router-link>
    </div>
    <router-link v-if="!isRouter&&$store.getters.userinfo.userinfo" to="/about">
      <img class="user-avatar" :src="$store.getters.userinfo.userinfo.avatarUrl" alt="" srcset="">
    </router-link>
    <router-link v-if="!isRouter && !$store.getters.userinfo.userinfo" to="/login">登录</router-link>
    <button v-if="isRouter" class="search-btn" @click="$emit('search')">搜索</button>
  </section>
</template>
<script>
export default {
  name: "b-search",
  props: {
    keywords: {
      type: String,
      default: ""
    },
    isRouter:{
      type:Boolean,
      default:false
    }
  }
};
</script>
<style lang="less" scoped>
.b-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 50px;
  padding: 4px 6px;
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
  .search-logo,
  .search-input,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
  }
  .search-logo,.search-back{
    width: 18%;
    font-size: 20px;
    img {
      width: 110%;
      height: 95%;
    }
    .icon-faxianshebei {
      font-size: 0.3rem !important;
    }
  }
  .search-input {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 85%;
    border: 1px solid #eee;
    border-radius: 4px;
    background-color: #eee6;
    padding: 0 8px;
    .s-input {
      box-sizing: border-box;
      width: 88%;
      height: 100%;
      padding: 0 8px;
      border: none;
      font-size: 16px;
    }
    .iconfont {
      font-size: 20px;
      color: #aaa;
    }
    button{
      outline: none;
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
    }
  }
  .search-btn,.search-back{
    outline: none;
    border: none;
    background-color: transparent;
  }
  a,.search-btn,.search-back{
    width: 15%;
    font-size: 16px;
    .user-avatar{
      height: 95%;
      border-radius: 50%;
    }
  }
  
}
</style>