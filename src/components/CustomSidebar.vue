<template>
  <div :class="isdark ? 'custom-sidebar__bg-dark' : 'custom-sidebar__bg-light'">
    <div
      :class="
        isdark
          ? 'custom-sidebar__content-bg-dark'
          : 'custom-sidebar__content-bg-light'
      "
      class="custom-sidebar__content"
    >
      <div class="">
        <picture class="is-flex">
          <img
            src="@/assets/img/googlelogo.png"
            :alt="`$t('alt_image_logo')`"
          />
        </picture>
        <div
          v-for="option in options"
          :key="option"
          class="custom-sidebar__content-item  is-flex is-align-items-center"
        >
          <span class="material-icons">
            {{ $t(`sidebar.option_${option}.icon`) }}
          </span>
          <p>{{ $t(`sidebar.option_${option}.text`) }}</p>
        </div>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CustomSidebar',
  data () {
    return {
      isdark: false,
      options: 11
    }
  }
}
</script>
