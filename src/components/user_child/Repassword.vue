<template>
  <section class="repassword page-blank">
    <BasicBlank />
    <BasicLogo />
    <h2 class="re-title">找回密码:</h2>
    <div class="re-content">
      <span class="re-step">第一步: 输入账号获取邮箱验证码.</span>
      <BasicGroupInput verify="获取验证码" v-model="email" @verifyClick="getVerify" width="100%" placeholder="账号" icon="icon-youxiang1" />
      <span class="re-step">第二步: 输入获取到的验证码.</span>
      <BasicGroupInput v-model="verify" width="100%" placeholder="验证码" icon="icon-mima2" />
      <span class="re-step">第三步: 输入新密码.</span>
      <BasicGroupInput type="password" v-model="password" width="100%" placeholder="新密码" icon="icon-mima2" />
    </div>
    <div class="re-submit">
      <BasicButton btnTitle="提交修改" width="75%" @click="repassword" />
    </div>
  </section>
</template>
<script>
import BasicBlank from "../basic/BasicBlank";
import BasicGroupInput from "../basic/BasicGroupInput";
import BasicButton from "@/components/basic/BasicGroupButton";
import BasicLogo from "@/components/basic/BasicUserLogo";
export default {
  name: "repassword",
  components: {
    BasicBlank,
    BasicGroupInput,
    BasicButton,
    BasicLogo,
  },
  data: () => ({
    email: "",
    verify:"",
    password:"",
  }),
  created() {},
  methods: {
    getVerify(){
      if( this.email === "") return
      this.axios.post('/fiction/verify',{email:this.email})
        .then(res=>{
          console.log(res);
        })
        .catch(err=>{
          console.log(err);
        })
    },
    repassword(){
      this.axios.post('/fiction/repassword',{password:this.password,verify:this.verify})
        .then(result=>{
          console.log(result);
          
        })
        .catch(err=>{
          console.log(err);
          
        })
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.repassword {
  .re-title {
    margin: 0.2rem auto;
    text-indent: 0.2rem;
    font-size: 0.2rem;
  }
  .re-content {
    box-sizing: border-box;
    padding: 0 20px;
    .re-step {
      display: inline-block;
      padding-bottom: 0.08rem;
      text-indent: 0.05rem;
      font-size: 0.1rem;
      color: grey;
    }
  }
  .re-submit{
    text-align: center;
  }
}
</style>