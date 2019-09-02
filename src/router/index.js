import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)






const vueRouter = new Router({
  mode: 'history',//history则为html5模式，没有#；hash则有#
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
      // name: 'home',
      // component: () => import('views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('components/content/login/Index')
    },
    {
      path: '/index',
      name: 'home',
      component: () => import('components/content/home/Home'),
      children:[
        {
          path: 'home',
          name: 'hello',
          component: () => import('components/content/hello/Hello')
        },

        {
          path: 'permissionsUser',
          component: () => import('components/content/permissions_user/Home')
        }
      ]
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

        // {
        //   path: '',
        //   redirect: 'joker1'
        // }
        // ,

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
