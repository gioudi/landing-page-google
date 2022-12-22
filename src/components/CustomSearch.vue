<template>
  <div
    :class="
      backgroundDark ? 'custom-search__bg-dark' : 'custom-search__bg-light'
    "
  >
    <div
    :class="
        backgroundDark ? 'custom-search__bg-dark-content' : 'custom-search__bg-light-content'
      "
    >
    <button  :class="
        backgroundDark ? 'custom-search__bg-dark-button' : 'custom-search__bg-light-button'
      ">
      <span class="material-icons-outlined">
        search
      </span>
    </button>
      <input type="search" name="input-search" id="serch"
      :class="
        backgroundDark ? 'custom-search__bg-dark-input' : 'custom-search__bg-light-input'
      "
    >
    <div class="is-inline-flex is-align-items-center">
       <button  :class="
        backgroundDark ? 'custom-search__bg-dark-options' : 'custom-search__bg-light-options'
      ">
       <img src="../assets/img/microphone.svg" class="options-search" :alt="$t('alt_image_microphonre')" />
      </button>
      <button  :class="
          backgroundDark ? 'custom-search__bg-dark-options' : 'custom-search__bg-light-options'
        ">
        <img src="../assets/img/app.svg" class="options-search" :alt="$t('alt_image_app')" />
      </button>
    </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'CustomSearch',
  computed: {
    ...mapState(['backgroundDark'])
  }
}
</script>
