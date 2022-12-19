<template>
  <div
    :class="backgroundDark ? 'landing-page__bg-dark' : 'landing-page__bg-light'"
  >
    <a href="#" class="landing-page__link">
      <picture class="landing-page__bg-light-content">
        <img src="@/assets/img/googlelogo.png" :alt="$t('alt_image_logo')" />
      </picture>
    </a>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'CustomFooter',
  computed: {
    ...mapState(['backgroundDark'])
  }
}
</script>
