import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import register from '@/views/register.vue'
import login from '@/views/Login.vue'
import userinfo from '@/views/userinfo.vue'
import edit from '../views/Edit.vue'
import article from '@/views/Article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Home,
      meta:{
        keepalive:true
      }
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/login',
      component: login
    },
    {
      path:'/userinfo',
      component: userinfo
    },
    {
      path:'/edit',
      component: edit
    },
    {
      path:'/article/:id',
      component:article
    }
  ],
  mode:'history'
})
