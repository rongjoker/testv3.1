<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/img/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <nav-bar></nav-bar> -->
    <NavBar class="home-nav"><div slot="center" >我是首页，而且我在中间呢</div></NavBar>
    <!-- {{status}} -->
    <user></user>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from 'components/common/navBar/Home'
import User from 'components/content/user/List'

import {appStatus} from 'network/httpq'

export default {
  name: 'home',
  components: {
    NavBar,
    User
  },
  computed: {
    status(){
      let res = appStatus();
      console.log('res: ', res);
      

      return res;

    }
  },
}
</script>

<style scoped>

.home-nav {
  color: grey;
}

</style>
