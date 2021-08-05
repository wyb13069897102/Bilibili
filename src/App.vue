<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="this.$route.meta.keepalive"/>
    </keep-alive>
      <router-view v-if="!this.$route.meta.keepalive"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
  p{
    margin: 0;
    padding: 0;
  }
</style>
