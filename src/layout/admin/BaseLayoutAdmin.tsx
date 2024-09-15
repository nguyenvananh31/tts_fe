import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const { Header, Content, Footer } = Layout;

const BaseLayoutAdmin: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0, backgroundColor: "transparent", minHeight: "78px" }}>
        </Header>
        <Content style={{ margin: '24px 24px 0 24px' }}>
          <Outlet></Outlet>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BaseLayoutAdmin;