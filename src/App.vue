<template>
  <div>
    <custom-nav />
    <router-view />
  </div>
</template>

<script>
import CustomNav from './components/CustomNav.vue'

export default {
  name: 'App',
  components: {
    CustomNav
  }
}
</script>
<style lang="scss">
@import '../src/scss/style';
</style>
