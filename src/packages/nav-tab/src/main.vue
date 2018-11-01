<template>
  <div class="tabbar">
    <div class="title">
      {{ title }}
    </div>
    <div class="tab-item-wrapper">
      <div
        class="tab-item" v-for="(item, index) in items" :key="index"
        :style="{ zIndex: index === selected ? 1000 : (items.length - index) + 10 }"
        :class="{ selected: index === selected }"
        @click="clickItem(index, item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavTab',
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default() {
        return []
      },
    },
    selected: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    clickItem(index, item) {
      this.$emit('click-item', index, item)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabbar {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 32px;
  line-height: 32px;
  background: #d3d9e2;
}
.title {
  box-sizing: border-box;
  color: #fff;
  background: #384a66;
  font-size: 16px;
  width: 120px;
  padding: 0 20px;
}
.tab-item-wrapper {
  display: flex;
  width: calc(100% - 120px);
  margin-left: -5px;
}
.tab-item {
  position: relative;
  width: 102px;
  text-align: center;
  font-size: 14px;
  margin-left: -6px;
  z-index: 1;
  color: #fff;
  cursor: pointer;
  &.selected {
    color: #131d2d;
    &::before {
      background: #fff;
      border: 1px solid #fff;
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #a3b4cc;
    z-index: -1;
    transform-origin: bottom;
    transform: scaleY(1.3) perspective(0.68em) rotateX(5deg);
    border:1px solid #889bb7;
    border-bottom: none;
  }
}
</style>
