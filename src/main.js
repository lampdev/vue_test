// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueLocalStorage from 'vue-ls';

const options = {
  namespace: 'vuejs__'
}

Vue.use(iView)
Vue.use(VueLocalStorage, options)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
