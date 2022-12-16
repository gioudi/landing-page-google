<template>
    <div
    :class="
        backgroundDark ? 'custom-tab__bg-dark' : 'custom-tab__bg-light'
      "
    >
        <ul
        :class="backgroundDark ? 'custom-tab__list-bg-dark' : 'custom-tab__list-bg-light'"
        >
            <li
            v-for="(option, index) in options"
            :key="index"
            class="custom-tab__list-item"
            @click="selectTab(option)"
            :class="option.id === activeTab.id ? 'custom-tab__list-item-active' : ''" >
                <p>{{option.text}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CustomTab',
  computed: {
    ...mapState(['backgroundDark', 'activeTab'])
  },
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapMutations(['SET_TAB']),
    selectTab (payload) {
      this.SET_TAB(payload)
    }
  }
}
</script>
