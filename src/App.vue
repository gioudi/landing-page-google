<template>
  <div :class="backgroundDark ? 'bg-dark' : 'bg-light'">
    <custom-nav />
    <router-view />
  </div>
</template>

<script>
import CustomNav from './components/CustomNav.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    CustomNav
  },
  computed: {
    ...mapState(['backgroundDark'])
  }
}
</script>
<style lang="scss">
@import '../src/scss/style';
</style>
