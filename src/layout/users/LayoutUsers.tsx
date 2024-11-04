import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/users/Header';
import Footer from '../../components/users/Footer';

const LayoutUsers: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Header />
      <Outlet />
      <Footer />
    </Layout>
  );
};

export default LayoutUsers;