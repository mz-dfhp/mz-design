---
  toc: content
  mobile: false
  order: 1
---
# Icon

语义化的矢量图形。

## 基本使用

```jsx
import { Icon, Space, Icons } from 'mz-design';
const { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Close, Refresh } = Icons
export default () => <Space>
  <Icon>
    <ArrowUp/>
  </Icon>
  <Icon>
    <ArrowDown/>
  </Icon>
  <Icon>
    <ArrowLeft/>
  </Icon>
  <Icon>
    <ArrowRight/>
  </Icon>
  <Icon>
    <Close/>
  </Icon>
  <Icon>
    <Refresh/>
  </Icon>
</Space>;
```

## spin

```jsx
import { Icon, Space, Icons } from 'mz-design';
const { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Close, Refresh } = Icons
export default () => <Space>
  <Icon spin>
    <ArrowUp/>
  </Icon>
  <Icon spin>
    <ArrowDown/>
  </Icon>
  <Icon spin>
    <ArrowLeft/>
  </Icon>
  <Icon spin>
    <ArrowRight/>
  </Icon>
  <Icon spin>
    <Close/>
  </Icon>
  <Icon spin>
    <Refresh/>
  </Icon>
</Space>;
```

## style

```jsx
import { Icon, Space, Icons } from 'mz-design';
const { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Close, Refresh } = Icons
export default () => <Space>
  <Icon style={{fontSize:'28px',color:'#1677ff'}}>
    <ArrowUp/>
  </Icon>
  <Icon style={{fontSize:'28px',color:'#1677ff'}}>
    <ArrowDown/>
  </Icon>
  <Icon style={{fontSize:'28px',color:'#1677ff'}}>
    <ArrowLeft/>
  </Icon>
  <Icon style={{fontSize:'28px',color:'#1677ff'}}>
    <ArrowRight/>
  </Icon>
  <Icon style={{fontSize:'28px',color:'#1677ff'}}>
    <Close/>
  </Icon>
  <Icon style={{fontSize:'28px',color:'#1677ff'}}>
    <Refresh/>
  </Icon>
</Space>;
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| spin | 旋转 | boolean | false |
| className | className | string | - |
| style | 例如 fontSize 和 color | CSSProperties | - |
| onClick | 点击按钮时的回调 | (event: MouseEvent) => void | - |
