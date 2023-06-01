import { Button, ConfigProvider } from '@ant-design/components'

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
      <div>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            margin: '20px 0',
            flexWrap: 'wrap'
          }}
        >
          <Button type="primary" loading>
            Button
          </Button>
          <Button type="success">success</Button>
          <Button type="warning">warning</Button>
          <Button type="error">error</Button>
          <Button type="info">info</Button>
          <Button>default</Button>
          <Button type="link">link</Button>
          <Button type="dashed">dashed</Button>
          <Button disabled>disabled</Button>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          margin: '20px 0',
          flexWrap: 'wrap'
        }}
      >
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
        <Button type="link" disabled>
          link
        </Button>
        <Button type="dashed" disabled>
          dashed
        </Button>
        <Button disabled>disabled</Button>
        <Button type="primary" block loading>
          Block
        </Button>
      </div>
    </div>
  )
}

export default App
