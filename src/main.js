import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import { Dialog } from 'vant';
import "vant/lib/index.css"
import { Uploader } from 'vant';
import { get,post } from '@/Api/api';
Vue.use(get,post)
Vue.use(Uploader);
Vue.use(Uploader);
Vue.use(Vant);
Vue.use(Dialog);
import router from './router'
import store from './store'
Vue.config.productionTip = false
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'DReNFGMjVeDsZF5RWrz6av9xz4jYGe18'
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
