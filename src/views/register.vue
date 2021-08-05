<template>
  <div>
    <login-top middleTop="注册bilibili">
      <div slot="right" style="font-size:3.611vw" @click="$router.push('/login')">切换到登录</div>
    </login-top>
    <login-text
      label="用户名"
      style="margin: 4.167vw 0"
      placeholder="请输入用户名"
      rule="^.{6,16}$"
      @inputChange="(res) => (model.name = res)"
    />
    <login-text
      label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @inputChange="(res) => (model.username = res)"
    />
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      @inputChange="(res) => (model.password = res)"
    />
    <login-btn btntext="注册" @registerSubmit="registerSubmit"></login-btn>
  </div>
</template>

<script>
import LoginTop from "@/components/common/loginTop.vue";
import LoginText from "@/components/common/loginText.vue";
import LoginBtn from "@/components/common/loginBtn.vue";
export default {
  data() {
    return {
      model: {
        name: "",
        username: "",
        password: "",
      },
    };
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn,
  },
  methods: {
    async registerSubmit() {
      let rul = /^.{6,16}$/;
      if (
        rul.test(this.model.name) &&
        rul.test(this.model.username) &&
        rul.test(this.model.password)
      ) {
        const res = await this.$http.post("/register", this.model);
        this.$msg.fail(res.data.msg);
        localStorage.setItem('id', res.data.id)
        localStorage.setItem('token', res.data.objtoken)
        setTimeout(()=>{
          this.$router.push('/userinfo')
        }, 1000)
      } else {
        this.$msg.fail("格式不正确, 重新输入");
      }
    },
  },
};
</script>

<style>
</style>