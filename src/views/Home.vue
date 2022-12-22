<template>
  <div
    :class="backgroundDark ? 'landing-page__bg-dark' : 'landing-page__bg-light'"
  >
    <a href="#" class="landing-page__link">
      <picture
      :class="backgroundDark ? 'landing-page__bg-dark-content' : 'landing-page__bg-light-content'"
      >
        <img src="@/assets/img/googlelogo.png" :alt="$t('alt_image_logo')" />
      </picture>
    </a>
    <custom-search></custom-search>

    <div class="is-flex is-align-items-center is-hidden-touch is-justify-content-center">
      <button type="button"
      :class="backgroundDark ? 'landing-page__bg-dark-button' : 'landing-page__bg-light-button'"
      >
      {{ $t('landing.button_text_1') }}
      </button>
      <button type="button"
       :class="backgroundDark ? 'landing-page__bg-dark-button' : 'landing-page__bg-light-button'"
      >
      {{ $t('landing.button_text_2') }}
      </button>

    </div>

     <div class="is-flex is-align-items-center px-3 my-5 is-justify-content-center ">
        <p class="is-size-7">{{$t('landing.text_1')}}
          <a  class="px-3" type="button">
          {{$t('landing.text_2')}}
         </a>
        </p>
     </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import CustomSearch from '../components/CustomSearch.vue'
export default {
  name: 'CustomFooter',
  components: {
    CustomSearch
  },
  computed: {
    ...mapState(['backgroundDark'])
  }
}
</script>
