<template>
  <div id="app">
    <div id="nav">
      <router-link :to="'/lr/'+uid" tag="button" replace>lr</router-link> |
      <router-link to="/joker" replace>joker</router-link>|
      <router-link to="/" replace>home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import "assets/css/base.css";
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
