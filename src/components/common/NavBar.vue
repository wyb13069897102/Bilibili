<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" @click="$router.push('/')" />
    </div>
    <div>
      <p>
        请输入内容
        <van-icon class="inp-icon" name="search" />
      </p>
    </div>
    <div>
      <img :src="imgUrl" @click="$router.push('/edit')" alt="" v-if="imgUrl" />
      <img src="@/assets/default_img.jpg" @click="$router.push('/login')" alt="" v-else />
      <p>下载APP</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "",
    };
  },
  async mounted() {
    if (localStorage.getItem("token")) {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.imgUrl = res.data[0].user_img;
    }
  },
};
</script>

<style>
.navbar {
  height: 12.5vw;
  display: flex;
  background-color: #fff;
}
.navbar > .logo {
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar > .logo > img {
  width: 100%;
}
.navbar > div:nth-child(2) {
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0 5px;
}
.navbar > div:nth-child(2) > p {
  background-color: #f4f4f4;
  height: 7.2vw;
  width: 95%;
  padding-left: 25px;
  border-radius: 3.333vw;
  position: relative;
  color: #aaa;
  font-size: 3.333vw;
  line-height: 7.2vw;
}
.inp-icon {
  position: absolute;
  left: 10px;
  top: 45%;
  transform: translate(0, -40%);
  color: #aaa;
}
.navbar > div:nth-child(3) {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar > div:nth-child(3) > img {
  width: 6.667vw;
  height: 6.667vw;
  border-radius: 50%;
}
.navbar > div:nth-child(3) > p {
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #fb7299;
  color: #fff;
  font-size: 3.611vw;
  border-radius: 0.833vw;
}
</style>