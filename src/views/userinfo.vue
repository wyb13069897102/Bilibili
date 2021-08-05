<template>
  <div class="userinfo">
      <nav-bar :userinfo="model"></nav-bar>
      <img src="@/assets/bannerTop_new.png" alt="" class="backimg">
      <user-detail :userInfo="model"></user-detail>
      <!-- <user-article></user-article> -->
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'
import userDetail from '../components/userComponent/userDetail.vue'
// import userArticle from '@/components/userComponent/userArticle.vue'
export default {
    data(){
        return {
            model:{}
        }
    },
    components:{
        NavBar,
        userDetail,
        // userArticle,
    },
    methods:{
        async UserinfoData(){
            console.log(localStorage.getItem('token'));
            const res = await this.$http.get('/user/' + localStorage.getItem('id'));
            this.model = res.data[0];
        }
    },
    created(){
        this.UserinfoData()
    }
}
</script>

<style>
.backimg{
    height: 101px;
    width: 100%;
}
</style>