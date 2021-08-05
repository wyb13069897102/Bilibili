<template>
  <div>
    <login-top middleTop="登录bilibili">
      <div
        slot="right"
        style="font-size: 3.611vw"
        @click="$router.push('/register')"
      >
        切换到注册
      </div>
    </login-top>
    <login-text
      label="账号"
      placeholder="请输入账号"
      style="margin-top: 4.167vw"
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
    <login-btn btntext="登录" @registerSubmit="registerSubmit"></login-btn>
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
      if (rul.test(this.model.username) && rul.test(this.model.password)) {
        try {
          const res = await this.$http.post("/login", this.model);
          this.$msg.fail(res.data.msg);
          if (res.data.code == 301 || res.data.code == 302) {
            return;
          }
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("token", res.data.token);
          setTimeout(() => {
            this.$router.push("/userinfo");
          }, 1000);
        } catch (error) {
          console.log("后台接口炸了");
        }
      } else {
        this.$msg.fail("格式不正确, 重新输入");
      }
    },
  },
};
</script>

<style>
</style>