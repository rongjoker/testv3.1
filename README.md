# testv3.1 #
### vue2 with cli3 ###
-----
## 学习记录 ##

### 2019-08-28 ###

* Vue-cli3创建项目，
`vue create projectName`

` <router-view/> `实现占位效果

`<router-link to="/lr">lr</router-link> ` 最终会被渲染为a标签

`<router-link to="/lr" tag="button" replace>lr</router-link> `渲染成button标签，并且不会左右前进后退


* 懒加载和动态路由
```
 {
      path: '/lr/:uid',
      // name:'lr',
      component: ()=> import('./components/lr.vue')

    } 
```


------

- vscode 快捷键
1. Command + Shift + K 删除行
2. Option + Up 向上移动行,Option + Down 向下移动行
3. Option + Shift + Up 向上复制行,Option + Shift + Down 向下复制行
4. Ctrl + G 跳转至某行Ctrl + G 跳转至某行
5. Command + Shift + V Markdown预览窗口
6. Command + B 打开/关闭侧边栏
7. 安装 javascript console utils后，command+shift+L选中对象，自动生成console.log；command+shift+D 删除文件中所有的console.logs

----
- Vetur默认使用 eslint-plugin-vue@beta 来检测 `<template>`,修改 vetur.validation.template 为false即可
- `this.$router.push`  操作路由；`this.$route.query` 获取路由传输的数据
- promise 用优雅的方式进行移步操作，解决回调地狱

### 2019-08-28 ###
1. 引入normalize.css 
2. `vue.config.js`配置别名：
```
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/v3.1/'
    : '/'
    ,

    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@src/assets',
          'common': '@src/common',
          'components': '@src/components',
          'views': '@src/views',
        }
      }

    }


}
```
3. 脚手架vue-cli 安装插件的命令为： `npm install vue-router --save `
4. 添加投影样式 `box-shadow: 0 1px 1px rgba(100, 100, 100, .1)`

### 2019-08-31 ###
1. 引入element : `vue add element`
2. 父子组建传递数据
父组件：
```
<detail :form2 = "form2" :aka="message"  ></detail>
```
子组件：
```
props: {
     form2: {
     type :Object,
     default(){
       return {}
     }
   },
   aka: {
     type :String,
     default(){
       return ''
     }
   }

}
```
### 2019-09-01 ###
1. css 使用别名需要加`~`,如`background-image: url("~assets/img/login/backgroundImg2.jpg");`
2. axios post请求参数是`data`,get请求参数是`params`,参考文档：http://www.axios-js.com/zh-cn/docs/
3. 解决`NavigationDuplicated {_name: "NavigationDuplicated", name: "NavigationDuplicated"}`这种bug的方案是在router.js中加代码：
```
import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
```
### 2019-09-01 ###
1. element的样式放在`element-variables.scss`中
2. 关闭左侧资源自动展开  `explorer->auto reveal` 关闭即可
