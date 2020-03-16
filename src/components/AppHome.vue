<template>
  <section class="app-home">
    <keep-alive>
      <section class="view-routers">
        <router-view />
      </section>
    </keep-alive>

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
        name: "书架",
        link: "/index",
        icon: "icon-biaoqian"
      },
      {
        name: "分类",
        link: "/category",
        icon: "icon-fenlei"
      },
      {
        name: "发现",
        link: "/discover",
        icon: "icon-faxian"
      },
      {
        name: "我的",
        link: "/about",
        icon: "icon-yonghutouxiang"
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
    width: 100%;
    height: calc(100% - 50px);
  }
}
</style>