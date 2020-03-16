<template>
    <section class="userinfo">
        <BasicBlank />
        <BasicSwiper :swiperList="swiperList" />
        this is my component page
    </section>
</template>
<script>
import  BasicBlank from "@/components/basic/BasicBlank";
import  BasicSwiper from "@/components/basic/BasicSwiper";
export default {
    name:"userinfo",
    components:{
        BasicBlank,
        BasicSwiper
    },
    data:()=>({
        swiperList:[]
    }),
    created(){
        this.getlist()
    },
    methods:{
        getlist(){
            axios.get('/api/qqxs/home')
                .then(res=>{
                    this.swiperList = res.data.result.banner
                    console.log(res);
                })
                .catch(console.error())
        }
    }
}
</script>
<style lang="less" scoped>
.userinfo{
    padding-top: 40px;
}
</style>