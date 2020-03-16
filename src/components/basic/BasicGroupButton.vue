<template>
    <button 
        :class="['group-btn',theme]" 
        :style="{'width':width,'height':height,'font-size':size}"
        @click="$emit('click')">
        {{btnTitle}}
    </button>
</template>
<script>
export default {
    name:"name",
    props:{
        btnTitle:{
            type:String,
            default:"button"
        },
        height:{
            type:String,
            default:"35px"
        },
        width:{
            type:String,
            default:"100%"
        },
        theme:{
            type:String,
            default:"green"
        },
        size:{
            type:String,
            default:"15px"
        }
    },
}
</script>
<style lang="less" scoped>
.group-btn{
    margin: 0 auto;
    line-height: 2;
    outline: none;
    border: none;
    border-radius: 8px;
    &:active{
        filter: blur(2px);
    }
}
.blue{
    background-color: var(--blue);
    color: var(--white);
}
.light{
    background-color: var(--white);
    border: 1px solid #eee;
    color: var(--gary);
}
.gary{
    background-color: var(--gary);
    color: var(--white);
}
.green{
    background-color: var(--green);
    color: var(--white);
}
.warn{
    background-color: var(--red);
    color: var(--white);
}
</style>