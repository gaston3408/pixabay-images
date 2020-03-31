import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootswatch/dist/darkly/bootstrap.min.css";
import 'jquery';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
