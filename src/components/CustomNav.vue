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
     <div class="is-hidden-touch">
      <div class="is-inline-flex is-align-items-center mr-3">
          <a href="#" target="_blank" rel="noopener noreferrer" class="mr-3 custom-navbar__link">
              <p>{{ $t(`nav.options.text_9`) }}</p>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" class="ml-3 custom-navbar__link">
              <p>{{ $t(`nav.options.text_2`) }}</p>
          </a>
      </div>
     </div>
     <div class="is-inline-flex is-align-items-center">
       <div  class="is-inline-flex is-align-items-center mr-3 custom-navbar__icon"
        type="button"
          @click="openListApps()"
        :class="{ 'active' : isOpenApps }"
       >
         <img src="../assets/img/apps-icon.svg" class="" :alt="$t('alt_image_app')" />
        </div>
        <button type="button" class="button is-primary  custom-navbar__button">{{$t('nav.button_text')}}</button>
     </div>
    </nav>

    <div
    :class="[  backgroundDark ? 'custom-navbar__bg-dark-listapps' : 'custom-navbar__bg-light-listapps',
     isOpenApps ? 'is-block' : 'is-hidden']">
      <div class="content__listapps">
        <div class="columns is-multiline is-mobile is-gapless">
          <div class="column is-4"
           v-for="index in range(1, 15)" :key="index">
            <div class="p-2 is-flex is-justify-content-center">
              <a class="content__listapps-option has-text-centered ">
                <div class="logo-services">
                  <img :src="require('@/assets/img/' + $t(`nav.services.list.app_${index}.url`))" class="logo-services__icon" :alt="$t('alt_image_app')" />
                </div>

                <p>{{ $t(`nav.services.list.app_${index}.text`) }}</p>
              </a>
            </div>
          </div>
          <div class="content__listapps-space"></div>
          <div class="column is-4"
           v-for="index in range(16, 31)" :key="index">
            <div class="p-2 is-flex is-justify-content-center">
              <a class="content__listapps-option has-text-centered ">
                <div class="logo-services">
                  <img :src="require('@/assets/img/' + $t(`nav.services.list.app_${index}.url`))" class="logo-services__icon" :alt="$t('alt_image_app')" />
                </div>

                <p>{{ $t(`nav.services.list.app_${index}.text`) }}</p>
              </a>
            </div>
          </div>
          <div class="column is-12 ">
            <div class="is-flex is-align-items-center py-4 is-justify-content-center">
              <a class="content__listapps-button" href="#" target="_blank" type="button">
                {{ $t('nav.services.button') }}
              </a>
            </div>
          </div>
        </div>
      </div>
     </div>

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
      isOpenSidebar: false,
      isOpenApps: false
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
    },
    openListApps () {
      this.isOpenApps = !this.isOpenApps
    },
    range (start, end) {
      return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
  }
}
</script>
