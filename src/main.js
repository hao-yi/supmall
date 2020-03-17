import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import Toast from 'components/common/toast/index'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant);
Vue.use(Toast)
Vue.use(VueLazyload)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
