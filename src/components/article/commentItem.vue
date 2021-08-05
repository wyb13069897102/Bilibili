<template>
  <div class="commentitems">
    <div class="commentItem" v-for="(item, index) in commentChild" :key="index">
      <div class="userImg">
        <img
          v-if="item.userinfo && item.userinfo.user_img"
          :src="item.userinfo.user_img"
          alt=""
        />
        <img v-else src="@/assets/default_img.jpg" alt="" />
        <p>
          <span v-if="item.userinfo">{{ item.userinfo.name }}</span>
          <span v-else>此用户无姓名</span>
          <span>{{ item.comment_data }}</span>
        </p>
      </div>
      <div class="commentContent">
        <div v-if="!temp">
          {{ item.comment_content }} <span class="publish">回复</span>
        </div>
        <div v-else>
          回复 <span style="color：#aaa">{{item.parent_user_info}}</span> ：{{ item.comment_content }} <span class="publish">回复</span>
        </div>
      </div>
      <commentchild-item :commentChild="item.child" :temp="true"></commentchild-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "commentchildItem",
  props: ["commentChild","temp"],
};
</script>

<style>
.commentitems {
  padding: 0 40px;
}
.commentItem {
  display: flex;
  flex-direction: column;
}
.userImg{
  display: flex;
}
.userImg > img{
  margin: 0 5px 10px 0;
}
.userImg > p{
  flex: 1;
  font-size: 3.611vw;
  color: #555;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.389vw;
}
.commentContent{
  position: relative;
  margin-bottom: 2.778vw;
}
.publish{
  position: absolute;
  right: 4.167vw;
  color: red;
}
</style>