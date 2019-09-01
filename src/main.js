import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui';
import ElementUI, { TabPane ,Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(sessionStorage.userName);
  if(to.path == "/login" || to.path == "/register"){
    next();
  }else{
    if(!(sessionStorage.userName == null || sessionStorage.userName == "undefined")){
      next();
    }else{
      // alert("请先登录");
      Message.error('尚未登录');
      next("/login");
    }
  }
  // console.log(sessionStorage.userName);
  // next();
})

new Vue({
  router,
  store,
  ElementUI,
  render: h => h(App)
}).$mount('#app')
