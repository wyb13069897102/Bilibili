<template>
  <div @click="pathPush">
    <div class="detailItem">
      <div class="imgparent">
        <img :src="detailitem.img" alt="" style="width: 100%" />
        <div class="bottom">
          <div class="icon-play2"> <span class="video">1233</span></div>
          <div class="icon-file-text">
            <span class="comment">{{
              !detailitem.commentlen ? 66 : detailitem.commentlen
            }}</span>
          </div>
        </div>
      </div>
        <p>{{ detailitem.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["detailitem"],
  methods:{
    pathPush(){
      if(this.$route.pah != `/article/${this.detailitem.id}`){
        this.$router.push(`/article/${this.detailitem.id}`)
      }
    }
  }
};
</script>

<style>
.detailItem p {
  font-size: 3.333vw;
  padding: 0.833vw 0;
}
.imgparent {
  position: relative;
  font-size: 15px;
  height: 14vh;
}
.bottom {
  width: 100%;
  position: absolute;
  bottom: 0px;
  color: white;
  display: flex;
  justify-content: space-between;
  background:linear-gradient(0deg, rgba(0,0,0,.75),transparent);
  padding: 1.389vw 0vw;
}
.icon-play2{
    padding-left: 5px;
}
.icon-play2 > .video{
    padding-left: 5px;
}
.icon-file-text{
    padding-right: 5px;
}
.icon-file-text > .comment{
    padding-left: 5px;
}
</style>