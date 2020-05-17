<template>
  <section class="app-search">
    <BasicBlank />
    <BasicSearchBox />
    {{$route.params.id}}
  </section>
</template>
<script>
import BasicSearchBox from './basic/BasicSearchBox'
import BasicBlank from './basic/BasicBlank'
export default {
  name: "app-search",
  components: {
    BasicSearchBox,
    BasicBlank
  },
  data: () => ({

  }),
  watch: {

  },
  filters: {

  },
  created() {

  },
  methods: {
    onSearch(){

    }
  },
  mounted(){

  },
};
</script>
<style lang="less" scoped>
 .app-search{
   position: relative;
   padding-top: 0.55rem;
 } 
</style>