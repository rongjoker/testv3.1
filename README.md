# testv3.1
<<<<<<< HEAD
vue2 with cli3
=======

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
>>>>>>> init


##学习记录##

###2019-08-28###

-> Vue-cli3创建项目，
`vue create projectName`

` <router-view/> 实现占位效果

<router-link to="/lr">lr</router-link>  最终会被渲染为a标签

<router-link to="/lr" tag="button" replace>lr</router-link> 渲染成button标签，并且不会左右前进后退


- [x] 懒加载和动态路由
  {
      path: '/lr/:uid',
      // name:'lr',
      component: ()=> import('./components/lr.vue')

    }
    `