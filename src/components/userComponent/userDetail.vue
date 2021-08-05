<template>
  <div class="userdetail">
    <div>
      <div class="user_img">
        <img :src="userInfo.user_img" v-if="userInfo.user_img" alt="" />
        <img v-else src="@/assets/default_img.jpg" alt="" />
      </div>
      <div class="user_edit">
        <div>
          <p>
            <span>0</span>
            <span class="user_text">粉丝</span>
          </p>
          <span class="text_split"></span>
          <p>
            <span>54</span>
            <span class="user_text">关注</span>
          </p>
          <span class="text_split"></span>
          <p>
            <span>0</span>
            <span class="user_text">获赞</span>
          </p>
        </div>
        <div @click="$router.push('/edit')">
          <div class="user_editBtn">编辑资料</div>
        </div>
      </div>
    </div>
    <div>
      <h2>{{ userInfo.name }}</h2>
      <p v-if="userInfo.user_desc">{{ userInfo.user_desc }}</p>
      <p v-else>这个人很神秘，什么都没留下</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userInfo"],
};
</script>

<style>
.userdetail {
  padding: 0 3.333vw;
  background-color: #fff;
}
.userdetail > div:nth-child(1) {
  display: flex;
}
.user_text {
  color: #aaa;
  font-size: 3.611vw;
}
.text_split {
  width: 0.278vw;
  height: 4.167vw;
  background-color: #aaa;
  margin-top: 2.778vw;
}
.user_edit {
  flex: 1;
}
.user_edit > div:nth-child(1) {
  padding: 3.333vw 0;
  display: flex;
}
.user_edit > div:nth-child(1) > p {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3.611vw;
}
.user_img {
  margin-right: 5.556vw;
}
.user_img > img {
  width: 23.611vw;
  height: 23.611vw;
  border-radius: 50%;
}
.user_editBtn {
  border: 0.278vw solid #fb7a9f;
  color: #fb7a9f;
  text-align: center;
  padding: 0.833vw;
  border-radius: 1.111vw;
}

.userdetail > div:nth-child(2) {
  font-size: 3.889vw;
}
.userdetail > div:nth-child(2) > h2 {
  margin: 2.778vw 0 0.833vw 0;
  font-weight: 400;
}
.userdetail > div:nth-child(2) > p {
  padding: 0;
  margin: 2.778vw 0;
  color: #999;
}
</style>