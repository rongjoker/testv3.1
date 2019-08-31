<template>
  <div>
<h2>i am joker</h2>
      <router-link to="/joker/joker1" replace>joker1</router-link>|
      <!-- <router-link to="/joker/joker2" replace>joker2</router-link> -->
      <!-- <router-link :to="{path:'/joker/joker3',query:{name:'joker',age:18,height:1.88}}"   replace>joker3</router-link> -->
      <button @click="butClick">joker3-button</button>

<router-view></router-view>



  </div>
</template>
<script>
export default {
  name:'joker',
  methods: {
    butClick(){
      this.$router.push(
        {path:'/joker/joker3',query:{name:'joker3',age:17,height:1.89}}
);
    }
  },
}
</script>