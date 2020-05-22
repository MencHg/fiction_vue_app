<template>
  <section class="me">
    <section class="user-head">
      <div class="user-avatar">
        <img
          class="avatar-image"
          v-if="!$store.getters.userinfo.userinfo"
          src="@/assets/user.png"
          @click="$router.push('/login')"
        />
        <img
          class="avatar-image"
          v-if="$store.getters.userinfo.userinfo"
          @click="reAvtarImage"
          :src="$store.getters.userinfo.userinfo.avatarUrl"
          alt
        />
        <span class="username" v-if="!$store.getters.userinfo.userinfo">未登陆</span>
        <span
          class="username"
          v-if="$store.getters.userinfo.userinfo"
        >{{$store.getters.userinfo.userinfo.nickname}}</span>
      </div>
    </section>
    <div class="user-history">
      <h3>最近动态:</h3>
    </div>
    <ul class="user-select">
      <li class="select-item">
        <span class="info-tag">签名:</span>
        <span v-if="$store.getters.userinfo.userinfo" class="info-content">{{$store.getters.userinfo.userinfo.motto}}</span>
      </li>
      <li class="select-item">
        <span class="info-tag">性别:</span>
        <span v-if="$store.getters.userinfo.userinfo" class="info-content">{{$store.getters.userinfo.userinfo.gender}}</span>
      </li>
      <li class="select-item">
        <span class="info-tag">城市:</span>
        <span v-if="$store.getters.userinfo.userinfo" class="info-content">{{$store.getters.userinfo.userinfo.city}}</span>
      </li>
      <li class="select-item">
        <span class="info-tag">注册时间:</span>
        <span v-if="$store.getters.userinfo.userinfo" class="info-content">{{$store.getters.userinfo.userinfo.registerTime}}</span>
      </li>
    </ul>
    <p class="app-version">version v_1.0.0</p>
  </section>
</template>
<script>
export default {
  name: "me",
  components: {
  },
  data: () => ({
    croppa: {},
    dataUrl: "",
    userinfo: [],
    history: []
  }),
  created() {
    if (!this.$store.getters.userinfo.userinfo) this.getUserInfo();
  },
  computed: {},
  methods: {
    reAvtarImage(){
      console.log("更换头像事件");
    },
    getUserInfo() {
      this.axios
        .get("/fiction/userinfo")
        .then(result => {
          this.$store.dispatch("setUserinfo", result.data.info);
        })
        .catch(err => console.log(err));
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
    display: flex;
    justify-content: center;
    align-items: center;
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
      text-align: center;
      .avatar-image {
        margin-bottom: 10px;
        display: block;
        width: 65px;
        border-radius: 50%;
      }
      .username {
        color: #eee;
      }
    }
  }
  .user-history {
    margin: 25px 10px 0;
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
      margin-bottom: 3px;
      box-sizing: inherit;
      line-height: 2;
      background-color: #fff;
      padding: 2px 10px;
      font-size: 15px;
      .info-tag {
        display: flex;
        width: 22%;
        justify-content: space-between;
        text-align: justify;
      }
      .info-content{
        color: #c0c0c0;
      }
    }
  }
  .app-version {
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