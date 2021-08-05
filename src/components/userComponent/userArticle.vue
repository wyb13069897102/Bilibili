<template>
  <div class="user_article">
    <van-tabs v-model="active">
      <van-tab title="动态">动态</van-tab>
      <span></span>
      <van-tab title="视频">视频</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {};
</script>

<style>
.van-tabs__line{
    background-color: white;
}
</style>