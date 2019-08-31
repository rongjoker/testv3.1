import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const vueRouter = new Router({
  mode: 'history',//history则为html5模式，没有#；hash则有#
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ 'views/About.vue')
    },
    {
      path: '/lr/:uid',
      component: () => import('components/test/lr.vue')

    }
    ,
    {
      path: '/joker',
      name: 'joker',
      component: () => import('components/test/joker.vue'),
      children:[

        {
          path: '',
          redirect: 'joker1'
        }
        ,

        {
          path: 'joker1',
          component: () => import('components/test/joker1.vue')
        }
        ,
        {
          path: 'joker2',
          component: () => import('components/test/joker2.vue')
        }
        ,
        {
          path: 'joker3',
          component: () => import('components/test/joker3.vue')
        }


      ]
    }
    ,
    {
      path: '/rongjoker',
      name: 'rongjoker',
      component: () => import('components/test/rongjoker.vue')
    }


  ]
})

export default vueRouter
