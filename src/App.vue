<template>
  <div id="app">
    <div id="nav">
      <router-link :to="'/lr/'+uid" tag="button" replace>lr</router-link> |
      <router-link to="/joker" replace>joker</router-link>|
      <router-link to="/" replace>home</router-link>
    </div>
    <!-- router-view -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav .router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  name: 'app',
  data() {
    return {
      uid:'joker'
    }
  },
  methods: {
    
  },
}
</script>
