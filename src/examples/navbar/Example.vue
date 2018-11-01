<template>
  <div class="navbar">
    <nav-tab
      title="质量整改" :items="tabItems" :selected="selectedIndex"
      @click-item="clickTabItem"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavTab from '@/components/NavTab'
import {
  PERMISSION_ISSUED,
  PERMISSION_RECEIVED,
  PERMISSION_VIEW,
} from '@/utils/constants'

export default {
  name: 'navbar',
  components: {
    NavTab,
  },
  computed: {
    ...mapGetters(['checkPermission']),
    tabItems() {
      // 对于 NavTab 组件，只有 label 是必须的
      const items = [{
        // name: 'issued-notice',
        label: '我发起',
        routeName: 'issued-notice-list',
        show: this.checkPermission(PERMISSION_ISSUED) ||
            this.checkPermission(PERMISSION_VIEW),
      }, {
        // name: 'received-notice',
        label: '我收到',
        routeName: 'received-notice-list',
        show: this.checkPermission(PERMISSION_RECEIVED) ||
            this.checkPermission(PERMISSION_VIEW),
      }]
      return items.filter(item => item.show)
    },
    selectedIndex() {
      for (let i = 0; i < this.tabItems.length; i += 1) {
        if (this.$route.name === this.tabItems[i].routeName) {
          return i
        }
      }
      return 0
    },
  },
  methods: {
    clickTabItem(index) {
      this.$router.replace({
        name: this.tabItems[index].routeName,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  box-sizing: border-box;
  z-index: 1;
  position: fixed;
  height: 32px;
  min-width: 100%;
  line-height: 32px;
  background-color: #fff;
  border-bottom: 1px solid #d9deea;
  padding: 0;
}
</style>
