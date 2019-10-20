import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Followers from './components/Follower.vue';
import Following from './components/Following.vue';
import Overview from './components/Overview.vue';
import Repository from './components/Repository.vue';
import '../node_modules/bulma/css/bulma.min.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Repository },
  { path: '/follower', component: Followers },
  { path: '/following', component: Following },
  { path: '/profile', component: Overview },
];

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
