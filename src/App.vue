<template>
 <div>
    <the-nav/>
    <router-view/>
 </div>
</template>

<script>

import TheNav from './components/TheNav.vue'

export default {
  name: 'App',
  
  components: {
    TheNav
  } 
}
</script>

<style lang="scss">
  @import "./assets/scss/style";
</style>
