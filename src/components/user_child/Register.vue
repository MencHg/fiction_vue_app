<template>
  <section class="register page-blank">
    <BasicBlank />
    <BasicLogo/>
    <BasicInput
      v-model="nickname"
      width="84%"
      placeholder="昵称"
      icon="icon-user"
      :tips="errMsg.nickname"
    />
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
    <div class="register-service">
      <div class="service-text">
        <input v-model="service" class="service-select" type="checkbox" />
        同意用户
        <router-link class="service-btn" to="service">《服务协议》</router-link>
      </div>
      <router-link class="service-btn" to="login">去登录 >></router-link>
    </div>
    <div class="register-btn">
      <BasicButton btnTitle="注册" width="75%" @click="registerClick()" />
    </div>
  </section>
</template>
<script>
import BasicBlank from "@/components/basic/BasicBlank";
import BasicInput from "@/components/basic/BasicGroupInput";
import BasicButton from "@/components/basic/BasicGroupButton";
import BasicLogo from "@/components/basic/BasicUserLogo";
export default {
  name: "register",
  components: {
    BasicBlank,
    BasicInput,
    BasicButton,
    BasicLogo
  },
  data: () => ({
    email: "",
    password: "",
    nickname: "",
    errMsg: {
      email: "",
      password: "",
      nickname: ""
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
        .post("/fiction/register", {
          email: this.email,
          password: this.password,
          nickname: this.nickname
        })
        .then(res => {
          console.log(res);

          if (res.data.data === "注册成功!~") {
            this.$router.push("/login");
          } else {
            this.errMsg.email = res.data.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    registerClick() {
      if (this.pwdMatch() && this.emailMatch()) {
        this.upload();
      }
    }
  }
};
</script>
<style lang="less" scoped>
.register {
  .register-logo {
    margin: 30px;
    text-align: center;
    img {
      width: 65%;
    }
  }
  .register-input {
    margin: 0 auto;
    width: 80%;
  }
  .register-service {
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
  .register-btn {
    text-align: center;
  }
}
</style>