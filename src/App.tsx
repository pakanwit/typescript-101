import React from 'react'
import { Layout } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import MenuComponent from './components/Menu'
import Config from './config'

const { Header, Sider, Content } = Layout

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean) => {
    console.log(collapsed)
    this.setState({ collapsed })
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <MenuComponent menuConfig={Config.menuConfig} />
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header> */}
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    )
  }
}


function App() {
  return <SiderDemo />
}

export default App