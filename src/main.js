import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import store from './store'
import axios from "axios";
import vuetify from './plugins/vuetify'
import router from "./routes";


Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  store,
  axios,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
