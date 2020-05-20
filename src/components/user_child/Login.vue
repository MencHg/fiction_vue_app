<template>
  <section class="login page-blank">
    <BasicBlank />
    <BasicLogo />
    <BasicInput
      v-model="email"
      width="84%"
      placeholder="邮箱"
      icon="icon-youxiang1"
      :tips="errMsg.email"
    />
    <BasicInput
      v-model="password"
      width="84%"
      type="password"
      placeholder="密码"
      icon="icon-mima2"
      :tips="errMsg.password"
    />
    <div class="login-service">
      <router-link class="service-btn" to="repassword">忘记密码 ?</router-link>
      <router-link class="service-btn" to="register">去注册 >></router-link>
    </div>
    <div class="login-btn">
      <BasicButton btnTitle="登录" width="75%" @click="loginClick()" />
    </div>
  </section>
</template>
<script>
import BasicBlank from "@/components/basic/BasicBlank";
import BasicInput from "@/components/basic/BasicGroupInput";
import BasicButton from "@/components/basic/BasicGroupButton";
import BasicLogo from "@/components/basic/BasicUserLogo";
export default {
  name: "login",
  components: {
    BasicBlank,
    BasicInput,
    BasicButton,
    BasicLogo
  },
  data: () => ({
    email: "",
    password: "",
    errMsg: {
      email: "",
      password: ""
    },
    service: true
  }),
  created() {},
  watch: {
    email() {
      this.emailMatch();
      return this.email;
    },
    password() {
      this.pwdMatch();
      return this.password;
    }
  },
  methods: {
    emailMatch() {
      let reg = /^\w+@[a-z0-9]+\.[a-z]+$/i; // /^1[3-9]\d{9}$/;
      if (reg.test(this.email)) {
        this.errMsg.email = "";
        return true;
      } else {
        this.errMsg.email = "邮箱格式错误";
        return false;
      }
    },
    pwdMatch() {
      let reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![.!#$%^&*]+$)[\da-zA-Z!.#$%^&*]{6,20}$/;
      if (reg.test(this.password)) {
        this.errMsg.password = "";
        return true;
      } else {
        this.errMsg.password = "密码必须包含字母数字符号执行少两种";
        return false;
      }
    },
    upload() {
      this.axios
        .post("/fiction/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          if (res.data.token) {
            localStorage.setItem("article_token", res.data.token);
            this.$router.push("/about");
          } else {
            this.errMsg.email = res.data.msg;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    loginClick() {
      if (this.pwdMatch() && this.emailMatch()) {
        this.upload();
      }
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  .login-input {
    margin: 0 auto;
    width: 80%;
  }
  .login-service {
    margin: 8px auto 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    font-size: 14px;
    .service-text {
      .service-select {
        outline: none;
      }
    }
    .service-btn {
      color: var(--green);
    }
  }
  .login-btn {
    text-align: center;
  }
}
</style>