# Drawer 抽屉

用于在屏幕边缘显示应用导航等内容的面板。

## Props

| 属性         | 类型    | 默认值   | 必填 | 说明                                               |
| ------------ | ------- | -------- | ---- | -------------------------------------------------- |
| visible.sync | boolean | false    | 否   | 是否显示                                           |
| title        | string  |          | 否   | 标题，设置标题后展示头部栏                         |
| placement    | string  | 'bottom' | 否   | 从哪展开，可选值：'bottom', 'top', 'left', 'right' |
| show-close   | boolean | false    | 否   | 是否显示关闭按钮，显示按钮后展示头部栏             |

## Events

| 事件                 | 描述           | 回调函数参数      |
| -------------------- | -------------- | ----------------- |
| visible-state-change | 展示隐藏时触发 | { state: string } |

### visible-state-change 的 state 值

| 值     | 说明                 | 备注                                              |
| ------ | -------------------- | ------------------------------------------------- |
| show   | 展示时触发           |                                                   |
| shown  | 展示且动画结束后触发 |                                                   |
| hide   | 隐藏时触发           | 可能携带其他参数 cancel, maskClick, closeClick 等 |
| hidden | 隐藏且动画结束后触发 | 可能携带其他参数 cancel, maskClick, closeClick 等 |

## Slots

```
<fx-drawer title="菜单" placement="right">
  <fx-tab />
</fx-drawer>
```

## Methods

| 方法名 | 说明     | 参数       |
| ------ | -------- | ---------- |
| show   | 展示抽屉 | () => void |
| hide   | 隐藏抽屉 | () => void |
