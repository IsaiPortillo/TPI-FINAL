import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import DataTable from "@andresouzaabreu/vue-data-table";
Vue.component("data-table", DataTable);
Vue.component("modal", {
  template: "#modal-template"
});
new Vue({
  el: '#navbar',
  data () {
    return {
      view: {
        topOfPage: true
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(){
      if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    }
  },
})


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