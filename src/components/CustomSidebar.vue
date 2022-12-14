<template>
  <div
    @touchstart="touchSidebar()"
    @click="touchSidebar()"
    :class="[
      backgroundDark ? 'custom-sidebar__bg-dark' : 'custom-sidebar__bg-light',
      openSidebar ? 'is-block' : 'is-hidden'
    ]"
  >
    <div
      :class="
        backgroundDark
          ? 'custom-sidebar__content-bg-dark'
          : 'custom-sidebar__content-bg-light'
      "
      class="custom-sidebar__content"
    >
      <div class="">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="mb-3 custom-sidebar__content-logo"
        >
          <picture class="is-flex ">
            <img
              src="@/assets/img/googlelogo.png"
              :alt="`$t('alt_image_logo')`"
            />
          </picture>
        </a>
        <div
          v-for="option in options"
          :key="option"
          class="custom-sidebar__content-item  is-flex is-align-items-center"
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            <span class="material-icons mr-3">
              {{ $t(`sidebar.option_${option}.icon`) }}
            </span>
            <p>{{ $t(`sidebar.option_${option}.text`) }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CustomSidebar',
  data () {
    return {
      options: 11,
      isOpenSidebar: false
    }
  },
  computed: { ...mapState(['backgroundDark', 'openSidebar']) },
  methods: {
    ...mapMutations(['SET_OPEN_SIDEBAR']),
    touchSidebar () {
      this.isOpenSidebar = !this.isOpenSidebar
      this.SET_OPEN_SIDEBAR(this.isOpenSidebar)
    }
  }
}
</script>
