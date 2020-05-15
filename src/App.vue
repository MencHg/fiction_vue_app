<template>
  <section id="app">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
  </section>
</template>
<script>
export default {
  name: "app",
};
</script>
<style lang="less">
:root{
  --gcolor:#0c152d;
  --green:#41b881;
  --blue:#2485ed;
  --gary:gray;
  --white:white;
  --red:#fc3838;
  --fonttitle:18px;
  --minfont:13px;
  --fontdesc:14px;
  --page:40px 10px 10px;
  --bsin:border-box;
};
html,
body,
#app {
  box-sizing: var(--bosin);
  width: 100%;
  height: 100%;
  color: var(--gcolor);
};
#app{
  margin: 0 auto;
  max-width: 640px;
  overflow-x: hidden;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.page-blank{
  padding: var(--page);
};
</style>
