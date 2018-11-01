<template>
  <div>
    <nav-tab
      title="山口" :items="tabItems"
    />
  </div>
</template>

<script>
import NavTab from '../../packages/nav-tab/src/main'

export default {
  data () {
    return {
      tabItems: [
        {
          label: '山口'
        },
        {
          label: '山下'
        }
      ]
    }
  },
  components: {
    NavTab
  }
}
</script>
