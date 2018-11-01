# vkui 组件库

## 组件列表
- [NavTab](https://github.com/wenjayliu/vkui/blob/master/src/examples/docs/navbar.md)

## 使用
暂时只能通过 `babel-plugin-component` 按需引入使用。

### 按需引入
``` json
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "vkui",
        "styleLibraryName": "theme-chalk"
      },
      "vkui"
    ]
  ]
}
```

### 安装
``` bash
npm i vkui -S
```
