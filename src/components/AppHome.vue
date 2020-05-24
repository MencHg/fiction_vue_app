<template>
  <section class="app-home">
    <section class="view-routers">
       <router-view />
    </section>
    <BasicTabar :navs="tabar" />
  </section>
</template>
<script>
import BasicTabar from "./basic/BasicTabar";
export default {
  name: "app-home",
  components: {
    BasicTabar
  },
  data: () => ({
    tabar: [
      {
        name: "推荐",
        link: "/index",
        icon: "icon-rementuijian"
      },
      {
        name: "分类",
        link: "/category",
        icon: "icon-piaojufenlei"
      },
      {
        name: "书架",
        link: "/like",
        icon: "icon-shujia1"
      },
      {
        name: "我的",
        link: "/about",
        icon: "icon-hy_user"
      }
    ]
  }),
  created() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.app-home {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .view-routers {
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    height: calc(100% - 50px);
  }
}
</style>