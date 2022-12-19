<template>
  <div :class="backgroundDark ? 'bg-dark' : 'bg-light'">
    <custom-nav />
    <article :class="backgroundDark ? 'bg-content__dark' : 'bg-content__light'">
      <router-view></router-view>
    </article>
    <custom-footer />
  </div>
</template>

<script>
import CustomNav from './components/CustomNav.vue'
import CustomFooter from './components/CustomFooter.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    CustomNav,
    CustomFooter
  },
  computed: {
    ...mapState(['backgroundDark'])
  }
}
</script>
<style lang="scss">
@import '../src/scss/style';
.bg-content {
  &__light {
    flex: 1;
  }
}
</style>
