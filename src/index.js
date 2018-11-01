
import NavTab from './packages/nav-tab/index.js'

const components = [
  NavTab
]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  NavTab
}

module.exports.default = module.exports
