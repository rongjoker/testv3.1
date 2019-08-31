<template>
  <div>
<h2>i am lr,my name is {{userId}}</h2>


  </div>
</template>
<script>
export default {
  name:'lr',
  data() {
  return {
    
  }
},
methods: {
  
},
computed: {

  userId(){
    return this.$route.params.uid;
  }
  
},
}


</script>