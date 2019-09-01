<template>
  <div id="app">
    <router-view></router-view>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Home></Home> -->
  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld.vue'
import Home from 'views/Home'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Home
  }
}
</script>

<style lang="scss">
@import '~assets/css/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
