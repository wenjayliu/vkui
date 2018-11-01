# NavTab 导航菜单
___
## 基础用法

### 使用
``` html
<template>
  <div>
    <nav-tab title="旗峰山" :items="tabItems" :selected="selected" @click-item="clickItem"/>
  </div>
</template>

<script>
import { NavTab } from 'vkui'
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
    clickItem(index, item) {
      this.selected = index
    }
  },
  components: {
    NavTab
  }
}
</script>
```

### Attributes

| 参数      | 说明         | 类型      | 可选值       | 默认值  |
|---------- |------------  |---------- |------------- |-------- |
| title     | 标题         | string    | —            |         |
| items     | 切换菜单     | array     | —            |         |
| selected  | 活动的菜单   | number    | —            |         |

### Events
| 事件名称  | 说明             | 回调参数      |
|---------- |----------------  |----------     |
|click-item |tab点击           |共2个参数，依次为：index, 被点击的item     |
