import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',//history则为html5模式，没有#；hash则有#
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
      // component: Home
      // redirect: 'joker'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/joker',
      name:'joker',
      component: ()=> import('./components/joker.vue')

    },
    {
      path: '/lr/:uid',
      // name:'lr',
      component: ()=> import('./components/lr.vue')

    }
  ]
})
