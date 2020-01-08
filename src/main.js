import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
//import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

import { ValidationProvider } from 'vee-validate';
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
// Register it globally
// main.js or any entry file.
Vue.component('ValidationProvider', ValidationProvider);

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
