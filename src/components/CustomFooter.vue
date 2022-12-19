<template>
  <footer
    :class="
      backgroundDark ? 'custom-footer__bg-dark' : 'custom-footer__bg-light'
    "
  >
    <div
      :class="
        backgroundDark
          ? 'custom-footer__bg-dark-country'
          : 'custom-footer__bg-light-country'
      "
    >
      <p>{{ $t('footer.country') }}</p>
    </div>
    <div
      :class="
        backgroundDark
          ? 'custom-footer__bg-dark-space'
          : 'custom-footer__bg-light-space'
      "
    ></div>
    <div
      :class="
        backgroundDark
          ? 'custom-footer__bg-dark-info'
          : 'custom-footer__bg-light-info'
      "
    >
      <div
        class="columns is-multiline is-mobile is-justify-content-space-around"
      >
        <div
          class="column  is-narrow
"
        >
          <a
            type="button"
            :rel="`$t('footer.options.option_1')`"
            class="footer-options
"
            >{{ $t('footer.options.option_1') }}</a
          >
          : off
        </div>
        <div class="column  is-narrow">
          <a
            type="button"
            :rel="`$t('footer.options.option_2')`"
            class="footer-options "
            >{{ $t('footer.options.option_2') }}</a
          >
        </div>
        <div class="column  is-narrow">
          <a
            href="#"
            target="_blank"
            :rel="`$t('footer.options.option_3')`"
            class="footer-options "
            >{{ $t('footer.options.option_3') }}</a
          >
        </div>
        <div class="column  is-narrow">
          <a
            href="#"
            target="_blank"
            :rel="`$t('footer.options.option_4')`"
            class="footer-options "
            >{{ $t('footer.options.option_4') }}</a
          >
        </div>
        <div class="column is-one-quarter">
          <a
            href="#"
            target="_blank"
            :rel="`$t('footer.options.option_5')`"
            class="footer-options "
            >{{ $t('footer.options.option_5') }}</a
          >
        </div>
        <div class="column is-one-quarter">
          <a
            href="#"
            target="_blank"
            :rel="`$t('footer.options.option_6')`"
            class="footer-options "
            >{{ $t('footer.options.option_6') }}</a
          >
        </div>
        <div class="column is-one-quarter">
          <a
            href="#"
            target="_blank"
            :rel="`$t('footer.options.option_7')`"
            class="footer-options "
            >{{ $t('footer.options.option_7') }}</a
          >
        </div>
      </div>
    </div>
  </footer>
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
