<template>
  <div
    :class="backgroundDark ? 'landing-page__bg-dark' : 'landing-page__bg-light'"
  ></div>
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
