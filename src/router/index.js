import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Slicer from '../views/Slicer';
import Synthesis from '../views/Synthesis';
import Viewer from '../views/Viewer';
import Main from '../views/Main';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/main',
        name: 'Main',
        component: Main
      },
      {
        path: '/synthesis',
        name: 'Synthesis',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/Synthesis.vue')
        component: Synthesis
      },
      {
        path: '/slicer',
        name: 'Slicer',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/Slicer.vue')
        component: Slicer
      },
      {
        path: '/viewer',
        name: 'Viewer',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/Viewer.vue')
        component: Viewer
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

/* 解决重复导航到同一个路由，控制台报错 */
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router;
