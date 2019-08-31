<!--  -->
<template>
<!-- <div class=''>i am joker3</div> -->
<div class='profile'>
  <h2>i am joker3, my profile is {{profile}}</h2>
  <h3>my name is {{profile.name}}</h3>
  <h3>my age is {{profile.age}}</h3>
  <h3>my height is {{profile.height}}</h3>

<p><a @click="promiseClick" href="#" >i am promise</a></p>
<p><a @click="axiosClick" href="#" >i am axios,{{axiosData}}</a></p>


  
 


</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import axios from 'axios'

export default {
//import引入的组件需要注入到对象中才能使用

name: 'joker3',
components: {},
data() {
//这里存放数据
return {

  axiosData:''

};
},
//监听属性 类似于data概念
computed: {

  profile(){
    
    return this.$route.query;
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

  promiseClick(){

    new Promise((resolve,reject) => {
      

      setTimeout(()=>{
        resolve();
      },1000)
    }).then(
      ()=>{
        

        return new Promise((resolve,reject)=>{
          // console.log('resolve: ', resolve);

          setTimeout(()=>{
            // resolve("i am resolve");
            reject("i am reject");
          },1000)

        }).then(
          (data)=>{
            console.log('data: ', data);


            
          }


        ).catch((err)=>{
          console.log('err: ', err);

        })


      }
    )





  },

  axiosClick(){

    axios({url:'https://apimarket.shinho.net.cn/sfa-app/status'}).then(
      (res)=>{

        this.axiosData = res.data.data.appServerStatus;


        



      }

    )







  }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style>

</style>