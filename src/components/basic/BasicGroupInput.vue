<template>
    <div class="group-input" :style="{'width':width}">
        <div class="input-focus">
            <i :class="['iconfont',icon]" v-if="icon"></i>
            <input 
                class="input-text"
                :type="type"
                :placeholder="placeholder"
                :value="value"
                @input="$emit('input',$event.target.value)"
                 />
        </div>
        <p class="err-tip"><span v-show="tips">{{tips}}</span></p>
    </div>
</template>
<script>
export default {
    name:"name",
    props:{
        width:{
            type:String,
            default:"100%"
        },
        icon:{
            type:String,
            default:""
        },
        type:{
            type:String,
            default:"text"
        },
        placeholder:{
            type:String,
            default:"内容"
        },
        tips:{
            type:String,
            default:"text"
        },
        value:String
    },
}
</script>
<style lang="less" scoped>
.group-input{
    margin: 4px auto;
}
.input-focus{
    box-sizing: var(--bsin);
    display: flex;
    justify-content: space-between;
    align-items: center; 
    line-height: 1.5;
    padding:2px 9px;
    border: 1px solid #aaa;
    border-radius: 8px;
    font-family: Arial, Helvetica, sans-serif;
    &:focus-within{
        box-shadow: 0 0 4px 1px #0ca179;
        border-color: #0ca179;
    }
    .iconfont,.input-text{
        vertical-align: middle;
    }
    .iconfont{
        width: 20px;
        font-size: 20px;
    }
    .input-text{
        width: calc(100% - 25px );
        height: 100%;
        line-height: 1.5;
        background-color: transparent;
        box-shadow:none;
        padding: 0;
        outline: none;
        font-size: var(--desc);
        border: none;
    }
}
.err-tip{
    height: 20px;
    line-height: 1.6;
    color: red;
    font-size: var(--minfont);
    text-indent: 2em;
}
</style>