<template>
  <section class="me">
    <section class="user-head">
      <div class="user-avatar">
        <span class="username" v-if="!$store.getters.userinfo.userinfo">未登陆</span>
        <span class="username" v-if="$store.getters.userinfo.userinfo" >{{$store.getters.userinfo.userinfo.nickname}}</span>
        <img class="avatar-image" v-if="!$store.getters.userinfo.userinfo" src="" @click="$router.push('/login')" />
        <img class="avatar-image" v-if="$store.getters.userinfo.userinfo"  :src="$store.getters.userinfo.userinfo.avatarUrl" alt="">
      </div>
    </section>
    <ul class="user-history">
      <li v-if="!history.length">最近在看</li>
      <li class="history-item" v-if="history.length">
        
      </li>
    </ul>
    <ul class="user-select">
      <li class="select-item"  v-for="(item,index) in select" :key="index">
        <span class="select-name">{{item.name}}</span>
        <i :class="['iconfont',item.icon]"></i>
      </li>
    </ul>
    <p class="app-version">
      version v_1.0.0
    </p>
  </section>
</template>
<script>
export default {
  name: "me",
  components: {},
  data: () => ({
    select:[
      {
        name:"我的收藏",
        icon:"icon-web__jiantou_you",
        link:"/like"
      },
      {
        name:"累计阅读",
        icon:"icon-web__jiantou_you",
        count:0,
        link:"read"
      },
      {
        name:"关于我们",
        icon:"icon-web__jiantou_you",
        link:"/like"
      },
    ],
    history:[]
  }),
  created() {
    if(!this.$store.getters.userinfo.userinfo) this.getUserInfo()
  },
  methods: {
    getUserInfo(){
      this.axios.get('/fiction/userinfo')
        .then(result=>{
          this.$store.dispatch("setUserinfo", result.data.info);
        })
        .catch(err=>console.log(err))
    }
  }
};
</script>
<style lang="less" scoped>
.me {
  height: 100%;
  background-color: rgba(204, 204, 204, 0.575);
  .user-head {
    position: relative;
    height: 160px;
    background-image: linear-gradient(
      30deg,
      #f66 0%,
      #6f9483 50%,
      #ffbc2bf9 90%
    );
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    .user-avatar {
      position: absolute;
      bottom: -20px;
      right: 35px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .avatar-image {
        margin-left: 25px;
        width: 65px;
      }
      .username {
        color: #eee;
      }
    }
  }
  .user-history{
    margin:25px 10px 0;
    box-sizing: border-box;
    height: 90px;
    background-color: #fff;
    padding: 9px;
  }
  .user-select {
    margin-top: 10px;
    box-sizing: border-box;
    padding: 9px;
    .select-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 3px;
      box-sizing: inherit;
      line-height: 2;
      background-color: #fff;
      padding: 2px 10px;
      font-size: 15px;
    }
  }
  .app-version{
    position: absolute;
    left: 0;
    bottom: 90px;
    width: 100%;
    line-height: 2;
    font-size: 12px;
    text-align: center;
    color: #aaa;
  }
}
</style>