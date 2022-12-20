<template>
  <div>
    <nav
      :class="
        backgroundDark ? 'custom-navbar__bg-dark' : 'custom-navbar__bg-light'
      "
      role="navigation"
      aria-label="main navigation"
    >
     <div class="is-hidden-tablet">
        <div class="is-inline-flex is-align-items-center">
            <div class="is-inline-flex is-align-items-center custom-navbar__icon mr-3"
          type="button"
          @click="openSidebar()"
          @touchstart="openSidebar()"
        >
          <span class="material-icons">
            menu
          </span>

        </div>
        <custom-tab :options="listTabs"></custom-tab>
       </div>

     </div>
     <div class="is-inline-flex">
       <div  class="is-inline-flex is-align-items-center mr-3 custom-navbar__icon"
        type="button"
       >
        <span class="material-icons">
          apps
        </span>
      </div>
        <button type="button" class="button is-primary  custom-navbar__button">{{$t('nav.button_text')}}</button>
     </div>

    </nav>

    <div class="is-hidden-tablet">
      <custom-sidebar></custom-sidebar>
    </div>
  </div>
</template>
<script>
import CustomSidebar from './CustomSidebar.vue'
import CustomTab from './CustomTab.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CustoNav',
  components: {
    CustomSidebar,
    CustomTab
  },
  data () {
    return {
      isdark: false,
      isOpenSidebar: false
    }
  },
  computed: {
    ...mapState(['backgroundDark']),
    listTabs () {
      return [
        {
          id: 1,
          text: this.$t('nav.options.text_1')
        },
        {
          id: 2,
          text: this.$t('nav.options.text_2')
        }
      ]
    }

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
