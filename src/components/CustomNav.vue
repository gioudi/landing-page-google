<template>
  <div>
    <nav
      :class="
        backgroundDark ? 'custom-navbar__bg-dark' : 'custom-navbar__bg-light'
      "
      role="navigation"
      aria-label="main navigation"
    >
      <div
        class="is-flex-touch"
        type="button"
        @click="openSidebar()"
        @touchstart="openSidebar()"
      >
        <span class="material-icons">
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
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CustoNav',
  components: {
    CustomSidebar
  },
  data () {
    return {
      isdark: false,
      isOpenSidebar: false
    }
  },
  computed: {
    ...mapState(['backgroundDark'])
  },
  methods: {
    ...mapMutations(['SET_OPEN_SIDEBAR']),
    openSidebar () {
      this.isOpenSidebar = !this.isOpenSidebar
      this.SET_OPEN_SIDEBAR(this.isOpenSidebar)
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
