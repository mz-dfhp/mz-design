import { Button, ConfigProvider, Space } from '@mz-design/components'

function App() {
  return (
    <div>
      <ConfigProvider theme={{ token: { colorPrimary: 'pink' } }}>
        <Button type="primary">primary</Button>
        <br />
        <br />
        <ConfigProvider theme={{ token: { colorPrimary: 'red' } }}>
          <Button type="primary">red</Button>
        </ConfigProvider>
      </ConfigProvider>
      <Space block>
        <Button type="primary">Button</Button>
        <Button type="success">success</Button>
        <Button type="warning">warning</Button>
        <Button type="error">error</Button>
        <Button type="info">info</Button>
        <Button>default</Button>
        <Button link>link</Button>
        <Button dashed>dashed</Button>
        <Button dashed type="warning">
          dashed
        </Button>
        <Button>disabled</Button>
        <Button loading>loading</Button>
        <Button type="primary" block>
          block
        </Button>
        <Button type="primary" round>
          round
        </Button>
        <Button type="primary" round block>
          round
        </Button>
      </Space>
      <br />
      <Space block>
        <Button type="primary" disabled>
          Button
        </Button>
        <Button type="success" disabled>
          success
        </Button>
        <Button type="warning" disabled>
          warning
        </Button>
        <Button type="error" disabled>
          error
        </Button>
        <Button type="info" disabled>
          info
        </Button>
        <Button disabled>default</Button>
        <Button link disabled>
          link
        </Button>
        <Button dashed disabled>
          dashed
        </Button>
        <Button disabled>disabled</Button>
        <Button type="primary" block>
          Block
        </Button>
        <Button type="primary" round disabled>
          round
        </Button>
        <Button type="primary" round block disabled>
          round
        </Button>
      </Space>
      <br />
      <Space block>
        <Button type="primary" loading>
          Button
        </Button>
        <Button type="success" loading>
          success
        </Button>
        <Button type="warning" loading>
          warning
        </Button>
        <Button type="error" loading>
          error
        </Button>
        <Button type="info" loading>
          info
        </Button>
        <Button loading>default</Button>
        <Button type="warning" link loading>
          link
        </Button>
        <Button type="primary" dashed loading>
          dashed
        </Button>
        <Button dashed loading>
          dashed
        </Button>
        <Button loading>loading</Button>
        <Button block loading>
          block
        </Button>
        <Button type="primary" block loading>
          block
        </Button>
        <Button loading round>
          round
        </Button>
        <Button loading round block>
          round
        </Button>
      </Space>
    </div>
  )
}

export default App
