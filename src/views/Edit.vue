<template>
  <div v-if="model" class="editViews">

    <nav-bar></nav-bar>

    <div class="uploadfile">
      <van-uploader
        class="uploadimg"
        preview-size="100vw"
        :after-read="afterRead"
      />
      <edit-banner style="margin-top: 2.778vw" left="头像">
        <img :src="model.user_img" slot="right" alt="" v-if="model.user_img" />
        <img src="@/assets/default_img.jpg" slot="right" alt="" v-else />
      </edit-banner>
    </div>

    <edit-banner left="昵称" @bannerClick="show = true">
      <a href="javascript:;" slot="right">{{ model.name }}</a>
    </edit-banner>

    <edit-banner left="账号">
      <a href="javascript:;" slot="right">{{ model.username }}</a>
    </edit-banner>

    <edit-banner left="性别" @bannerClick="gendershow = true">
      <a href="javascript:;" slot="right">{{ parseInt(model.gender) ? '男' : '女' }}</a>
    </edit-banner>

    <edit-banner
      style="margin-bottom: 2.778vw"
      left="个性签名"
      @bannerClick="textshow = true"
    >
      <a href="javascript:;" slot="right">{{ model.user_desc }}</a>
    </edit-banner>

    <div class="editback" @click="$router.push('/userinfo/')">返回个人中心</div>

    <van-dialog
      v-model="show"
      title="昵称"
      show-cancel-button
      @confirm="confirmClick"
      @cancel="content = ''"
    >
      <van-field v-model="content" autofocus />
    </van-dialog>

    <van-dialog
      v-model="textshow"
      title="个性签名"
      show-cancel-button
      @confirm="textAreaClick"
      @cancel="content = ''"
    >
      <van-field v-model="content" type="textarea" autofocus />
    </van-dialog>

    <van-action-sheet
      v-model="gendershow"
      cancel-text="取消"
      :actions="actions"
      @select="onSelect"
    />
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import editBanner from "@/components/common/editBanner.vue";
export default {
  data() {
    return {
      model: {},
      show: false,
      textshow: false,
      gendershow: false,
      content: "",
      actions: [
        { name: "男", val: 1 },
        { name: "女", val: 0 },
      ],
    };
  },
  components: {
    NavBar,
    editBanner,
  },
  methods: {
    async selectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
    async afterRead(file) {
      const formdata = new FormData();
      formdata.append("file", file.file);
      const res = await this.$http.post("/upload", formdata);
      this.model.user_img = res.data.url;
      this.userUpdate();
    },
    async userUpdate() {
      const res = await this.$http.post(
        "/update/" + localStorage.getItem("id"),
        this.model
      );
      if(res.data.code == 200){
        this.$msg.fail('修改成功')
      }
    },
    confirmClick() {
      this.model.name = this.content;
      this.userUpdate();
      this.content = "";
    },
    textAreaClick() {
      this.model.user_desc = this.content;
      this.userUpdate();
      this.content = "";
    },
    onSelect(data) { 
      this.model.gender = data.val;
      this.userUpdate();
      this.gendershow = false;
    },
  },
  created() {
    this.selectUser();
  },
};
</script>

<style>
.editViews a {
  color: #333;
}
.editViews img {
  width: 12.778vw;
  height: 12.778vw;
  border-radius: 50%;
}
.uploadfile {
  position: relative;
  overflow: hidden;
}
.uploadfile > .uploadimg {
  position: absolute;
  opacity: 0;
}
.editback{
  margin-top: 5.556vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 3.889vw;
  padding: 4.167vw 0;
}
</style>