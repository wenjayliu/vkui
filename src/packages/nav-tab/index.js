import NavTab from './src/main.vue'

/* istanbul ignore next */
NavTab.install = function(Vue) {
  Vue.component(NavTab.name, NavTab)
}

export default NavTab
