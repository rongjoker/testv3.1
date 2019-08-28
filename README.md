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

----