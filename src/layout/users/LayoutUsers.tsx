import { Layout } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const LayoutUsers = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Navbar />
    <Layout>

      <Content style={{ margin: '24px 24px 0 24px' }}>
        <Outlet></Outlet>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  )
}

export default LayoutUsers