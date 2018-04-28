import Vue from "vue";
import BootStrapVue from 'bootstrap-vue'
import router from './router/routes';
import store from "./vuex/store.js";

Vue.use(BootStrapVue);
Vue.config.debug = true;
Vue.config.debug = true;
Vue.config.debug = true;
Vue.config.debug = true;

// app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
// const vm = new Vue({
//   el: "#app",
//   store: store,
//   router,
//   render: h => h(App)
// });

const vm = new Vue({
  el: "#app",
  store: store,
  router,
  // components: [
  //   'DoRead.vue',
  //   'MyHeader.vue',
  //   'myTable.vue',
  //   'NavBar.vue',
  //   'PageClear.vue'
  // ],
}).$mount('#app');