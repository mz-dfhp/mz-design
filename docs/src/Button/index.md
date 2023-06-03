# Button

按钮用于开始一个即时操作。

## 基本使用

```jsx
import { Button, Box } from 'design';

export default () => <>
    <Box>
      <Button>default</Button>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
      <Button type="warning">warning</Button>
      <Button type="error">error</Button>
      <Button type="info">info</Button>
    </Box>
</>;
```


## link

```jsx
import { Button, Box } from 'design';

export default () => <>
    <Box>
      <Button link>link</Button>
      <Button type="primary" link>link</Button>
      <Button type="success" link>link</Button>
    </Box>
</>;
```

## dashed

```jsx
import { Button, Box } from 'design';

export default () => <>
    <Box>
      <Button dashed>dashed</Button>
      <Button type="primary" dashed>dashed</Button>
      <Button type="success" dashed>dashed</Button>
    </Box>
</>;
```


## block

```jsx
import { Button, Box } from 'design';

export default () => <>
    <Box>
      <Button block>block</Button>
      <Button type="primary" block>block</Button>
      <Button type="success" block>block</Button>
    </Box>
</>;
```


## round

```jsx
import { Button, Box } from 'design';

export default () => <>
    <Box>
      <Button round>default</Button>
      <Button type="primary" round>primary</Button>
      <Button type="success" block round>block</Button>
    </Box>
</>;
```


## loading

```jsx
import { Button, Box } from 'design';

export default () => <>
    <Box>
      <Button loading>default</Button>
      <Button loading type="primary">primary</Button>
      <Button loading type="success">success</Button>
      <Button loading type="warning">warning</Button>
      <Button loading type="error">error</Button>
      <Button loading type="info">info</Button>
      <Button loading link>link</Button>
      <Button loading type="primary" dashed>dashed</Button>
    </Box>
</>;
```

## disabled

```jsx
import { Button, Box } from 'design';

export default () => <>
    <Box>
      <Button disabled>default</Button>
      <Button disabled type="primary">primary</Button>
      <Button disabled type="success">success</Button>
      <Button disabled type="warning">warning</Button>
      <Button disabled type="error">error</Button>
      <Button disabled type="info">info</Button>
      <Button disabled link>link</Button>
      <Button disabled dashed>dashed</Button>
    </Box>
</>;
```