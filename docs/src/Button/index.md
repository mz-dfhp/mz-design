---
  nav: 组件
  toc: content
  mobile: false
  order: 1
---
# Button

按钮用于开始一个即时操作。

## 基本使用

```jsx
import { Button, Space } from 'mz-design';

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

## link

```jsx
import { Button, Space } from 'mz-design';

export default () => <>
    <Space wrap block>
      <Button link>link</Button>
      <Button type="primary" link>link</Button>
      <Button type="success" link>link</Button>
    </Space>
</>;
```

## dashed

```jsx
import { Button, Space } from 'mz-design';

export default () => <>
    <Space wrap block>
      <Button dashed>dashed</Button>
      <Button type="primary" dashed>dashed</Button>
      <Button type="success" dashed>dashed</Button>
    </Space>
</>;
```

## block

```jsx
import { Button, Space } from 'mz-design';

export default () => <>
    <Space direction='horizontal' wrap block>
      <Button block>block</Button>
      <Button type="primary" block>block</Button>
      <Button type="success" block>block</Button>
    </Space>
</>;
```

## round

```jsx
import { Button, Space } from 'mz-design';

export default () => <>
    <Space wrap block>
      <Button round>default</Button>
      <Button type="primary" round>primary</Button>
      <Button type="success" block round>block</Button>
    </Space>
</>;
```

## loading

```jsx
import { Button, Space } from 'mz-design';

export default () => <>
    <Space wrap block>
      <Button loading>default</Button>
      <Button loading type="primary">primary</Button>
      <Button loading type="success">success</Button>
      <Button loading type="warning">warning</Button>
      <Button loading type="error">error</Button>
      <Button loading type="info">info</Button>
      <Button loading link>link</Button>
      <Button loading type="primary" dashed>dashed</Button>
    </Space>
</>;
```

## disabled

```jsx
import { Button, Space } from 'mz-design';

export default () => <>
    <Space wrap block>
      <Button disabled>default</Button>
      <Button disabled type="primary">primary</Button>
      <Button disabled type="success">success</Button>
      <Button disabled type="warning">warning</Button>
      <Button disabled type="error">error</Button>
      <Button disabled type="info">info</Button>
      <Button disabled link>link</Button>
      <Button disabled dashed>dashed</Button>
    </Space>
</>;
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 设置按钮类型 | `primary` \| `success` \| `warning` \| `error` \| `info` \| `default` | `default` |
| link | 链接按钮 | boolean | false |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |
| disabled | 设置按钮失效状态 | boolean | false |
| loading | 设置按钮载入状态 | boolean | false |
| round | 圆角按钮 | boolean | false |
| className | className | string | - |
| style | 例如 fontSize 和 color | CSSProperties | - |
| onClick | 点击按钮时的回调 | (event: MouseEvent) => void | - |
