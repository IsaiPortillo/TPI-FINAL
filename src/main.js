import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
Vue.component("modal", {
  template: "#modal-template"
});

Vue.use(VueCookies)
Vue.$cookies.config('7d')

Vue.config.productionTip = false

new Vue({
  el: "#app",
  data: {
    showModal: true
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

new Vue({
 
});