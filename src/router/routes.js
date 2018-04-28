import Vue from "vue";
import VueRouter from 'vue-router';
import App from '../../src/App';
import NavBar from "../components/NavBar.vue";
import PageClear from "../components/PageClear.vue";
import DoRead from "../components/DoRead.vue";

Vue.use(VueRouter);

// mode: 'history',去除localhost:8080/#/xxxx的#號
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      name: 'app',
      component: App,
      // beforeRouterEnter: function (to, from, next) {

      // },
      children: [{
        path: '/navbar',
        name: 'NavBar',
        component: NavBar,
        children: [
          {
            path: '/PageClear',
            name: 'PageClear',
            component: PageClear,
          },
          {
            path: '/DoRead',
            name: 'DoRead',
            component: DoRead,
          },
        ]
      }]
    },
    // {
    //   path: '/',
    //   redirect: '/navbar',
    //   component: NavBar
    // },
  ]
});

export default router;

// 子路由不加父路由路徑，網址時會自動補
// {
//   path: '*',
//     redirect: '/mytab'
// },
// {
//   path: '*',
//     redirect: '/mytab'
// },
// {
//   path: '*',
//     redirect: '/mytab'
// },