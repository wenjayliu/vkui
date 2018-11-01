<template>
  <div>
    <nav-tab title="质量整改" :items="tabItems" :selected="selected" @click-item="clickItem"/>
  </div>
</template>

<script>
import NavTab from '../../packages/nav-tab/src/main'

export default {
  data () {
    return {
      tabItems: [
        {label: '山口'},
        {label: '山下'}
      ],
      selected: 0
    }
  },
  methods: {
    clickItem(index) {
      this.selected = index
    }
  },
  components: {
    NavTab
  }
}
</script>
