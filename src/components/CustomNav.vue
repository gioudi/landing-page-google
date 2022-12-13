<template>
  <div>
    <nav
      :class="isdark ? 'custom-navbar__bg-dark' : 'custom-navbar__bg-light'"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="is-flex-touch">
        <span class="material-icons" @click="openSidebar()">
          menu
        </span>
      </div>
    </nav>

    <div class="is-flex-touch">
      <custom-sidebar></custom-sidebar>
    </div>
  </div>
</template>
<script>
import CustomSidebar from './CustomSidebar.vue'
export default {
  name: 'CustoNav',
  components: {
    CustomSidebar
  },
  data () {
    return {
      isdark: false
    }
  }
}
</script>
<style lang="scss">
.custom-nav {
  @media screen and (max-width: 992px) {
    &__burger {
      margin-right: auto;
    }
  }
}
</style>
