---
  toc: content
  mobile: false
  order: 3
---
# Space

设置组件之间的间距

## 基本使用

```jsx
import { Button, Space } from 'design';

export default () => <>
    <Space wrap block>
      <Button>default</Button>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
      <Button type="warning">warning</Button>
      <Button type="error">error</Button>
      <Button type="info">info</Button>
    </Space>
</>;
```

## direction

```jsx
import { Button, Space } from 'design';

export default () => <>
    <Space wrap block direction="horizontal">
      <Button>default</Button>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
    </Space>
</>;
```

## align

```jsx
import { Button, Space } from 'design';

export default () => <>
    <Space wrap block align="start">
      <span>start</span>
      <Button type="primary" dashed>dashed</Button>
      <Button type="success" dashed>dashed</Button>
    </Space>
    <br/>
    <Space wrap block align="end">
      <span>end</span>
      <Button type="primary" dashed>dashed</Button>
      <Button type="success" dashed>dashed</Button>
    </Space>
    <br/>
    <Space wrap block align="center">
      <span>center</span>
      <Button type="primary" dashed>dashed</Button>
      <Button type="success" dashed>dashed</Button>
    </Space>
    <br/>
    <Space wrap block align="baseline">
      <span>baseline</span>
      <Button type="primary" dashed>dashed</Button>
      <Button type="success" dashed>dashed</Button>
    </Space>
</>;
```

## size

```jsx
import { Button, Space } from 'design';

export default () => <>
    <Space  wrap block size={50}>
      <Button>default</Button>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
    </Space>
</>;
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 间距方向 | `vertical` \| `horizontal` | `vertical` |
| align | 对齐方式 | `start` \| `end` \| `center` \| `baseline` | - |
| wrap | 是否自动换行 | boolean | false |
| size | 间距大小 | number | 10 |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |
| className | className | string | - |
| style | 例如 fontSize 和 color | CSSProperties | - |