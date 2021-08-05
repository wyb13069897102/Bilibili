// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import http from '../http.js'
import { Tab, Tabs, Uploader, Dialog, Toast, Field, ActionSheet } from 'vant';
import  '@/assets/style.css'
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Uploader);
Vue.use(Dialog);
Vue.use(Field);
Vue.use(ActionSheet);
Vue.prototype.$http = http;
Vue.prototype.$msg = Toast;
Vue.use(Vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
