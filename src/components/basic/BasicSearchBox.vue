<template>
  <section class="b-search">
    <div class="search-logo">
      <!-- <i class="iconfont icon-left-angle"></i> -->
      <img src="@/assets/s-logo.png" alt />
      <span class="logo-text">掌阅</span>
    </div>
    <div class="search-input">
      <router-link :to="'/search/'+ keywords">
        <i class="iconfont icon-faxianshebei"></i>
      </router-link>
      <input @input="$emit('input',$event.target.value)" type="text" class="s-input" placeholder="书名/作者"/>
    </div>
    <router-link to="/login">
      登录
    </router-link>
  </section>
</template>
<script>
export default {
  name: "b-search",
  props:{
    keywords:{
      type:String,
      default:""
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
  height: 55px;
  padding: 6px;
  background-color: #ffffff;
  .search-logo,
  .search-input,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
  }
  .search-logo {
    width: 20%;
    font-size: 20px;
    img {
      height: 100%;
    }
    .icon-faxianshebei {
      font-size: 0.3rem !important;
    }
    .logo-text {
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      font-size: 18px;
    }
  }
  .search-input {
    box-sizing: border-box;
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 60%;
    height: 85%;
    border: 1px solid #eee;
    border-radius: 4px;
    background-color: #eee6;
    padding: 0 8px;
    .s-input{
      box-sizing: border-box;
      width: 88%;
      height: 100%;
      padding: 0 8px;
      border: none;
      font-size: 16px;
    }
    a {
      width: 12%;
      .iconfont{
        font-size: 22px;
        color: #aaa;
      }
    }
  }
  a {
    width: 15%;
    font-size: 16px;
  }
}
</style>