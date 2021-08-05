<template>
  <div v-if="model">
    <nav-bar> </nav-bar>
    <div class="detailinfo">
      <div class="video">
        <video controls="controls" :src="model.content"></video>
      </div>
      <div class="detailinfoText">
        <div>
          <span>{{ model.category.title }}</span>
          <span>{{ model.name }}</span>
        </div>
        <div>
          <span>{{ model.userinfo.name }}</span>
          <span>146.6万次观看</span>
          <span>5281弹幕</span>
          <span>{{ model.date }}</span>
        </div>
        <div>
          <p>
            <span class="icon-star-full"></span>
            <span>收藏</span>
          </p>
          <p>
            <span class="icon-box-add"></span>
            <span>缓存</span>
          </p>
          <p>
            <span class="icon-redo2"></span>
            <span>分享</span>
          </p>
        </div>
      </div>
      <div class="detailparent">
        <cover
          class="detailitem"
          v-for="(item, index) in commendList"
          :key="index"
          :detailitem="item"
        ></cover>
      </div>
      <comment-title :dataLength="lens" @Postcomment="PostSuccess" ref="commentIpt"/>
      <comment @lengthselect="len => lens = len" ref="commentPublish" @publishClick="PostChildClick" ></comment>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import cover from "@/components/cover.vue";
import commentTitle from "@/components/article/commentTitle.vue";
import comment from "@/components/article/comment.vue";
export default {
  data() {
    return {
      model: null,
      commendList: null,
      myuser: null,
      lens:null,
      Postcom:{
        comment_content:'',
        comment_date:'',
        parent_id:null,
        article_id:null
      }
    };
  },
  components: {
    NavBar,
    cover,
    commentTitle,
    comment
  },
  methods: {
    async articleitemDate() {
      const res = await this.$http.get("/article/" + this.$route.params.id);
      this.model = res.data[0];
    },
    async commendDate() {
      const res = await this.$http.get("/commend/");
      this.commendList = res.data;
    },
    async PostSuccess(res){
      this.Postcom.comment_content = res;
      const date = new Date();
      let m = date.getMonth() + 1;
      let d = dtae.getDate();
      if(m < 10){
        m = '0' + m;
      }
      if(d < 10){
        d = '0' + d;
      }
      let str = `${m}-${d}`;
      this.Postcom.comment_date = str;
      this.Postcom.article_id = this.$route.params.id;
      const result = await this.$http.post('/comment_post/' + localStorage.getItem('id'), this.Postcom );
      this.$refs.commentPublish.commentDate()
    },
    PostChildClick(id){
      this.Postcom.parent_id = id;
      this.$refs.commentIpt.focusIpt();
    }
  },
  created() {
    this.articleitemDate();
    this.commendDate();
  },
  watch: {
    $route() {
      this.articleitemDate();
      this.commendDate();
    },
  },
};
</script>

<style>
.detailinfo {
  background-color: white;
}
.detailinfo > .video {
  width: 100%;
}
.detailinfo > .video > video {
  width: 100%;
}
.detailinfoText {
  padding: 2.778vw;
  font-size: 3.889vw;
}
.detailinfoText > div:nth-child(1) > span:nth-child(1) {
  padding: 0 2.778vw;
  color: #fb7299;
  background-color: #f4f4f4;
  border-radius: 2.778vw;
}
.detailinfoText > div:nth-child(2) {
  padding: 3.778vw 2.778vw;
}
.detailinfoText > div:nth-child(2) > span {
  color: #aaa;
  font-size: 3.333vw;
}
.detailinfoText > div:nth-child(2) > span:nth-child(1) {
  color: black;
  font-size: 3.889vw;
  padding-right: 2.778vw;
}
.detailinfoText > div:nth-child(3) {
  display: flex;
  padding: 0 2.778vw;
}
.detailinfoText > div:nth-child(3) > p {
  color: #757575;
  display: flex;
  align-items: center;
  margin-right: 4.167vw;
}
.detailinfoText > div:nth-child(3) > p > span:nth-child(1) {
  font-size: 5.556vw;
  padding-right: 0.833vw;
}
.detailinfoText > div:nth-child(3) > p > span:nth-child(2) {
  font-size: 3.611vw;
}
.detailparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.detailitem {
  width: 45%;
  margin: 1.389vw 0;
  margin-bottom: 20px;
}
</style>