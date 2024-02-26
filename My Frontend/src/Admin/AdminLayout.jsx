import "./AdminLayout.css";
import { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";
import { GrView } from "react-icons/gr";
import { FaFirstOrder } from "react-icons/fa";
import { TbBrandSafari } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { FcFeedback } from "react-icons/fc";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet ,Link} from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="Admin-Layout">
      <Sider trigger={null} collapsible collapsed={collapsed} className="Admin-Layout-Sider" style={{backgroundColor:"black"}}>
        <div className="demo-logo-vertical" />
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 80,
              height: 80,
              color:"white",
            }}
          />
       <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          className="AdminPanelMenu"
          items={[
            {
              key: '1',
              icon:<Link to="/AdminDashboard"><MdDashboard /></Link>,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <Link to="/AdminAllProduct"><GrView /></Link>,
              label: 'All Products',
            },
            {
              key: '3',
              icon:<Link to="/AdminAddProduct"> <IoMdAddCircle /></Link>,
              label: 'Add Products',
            },
            {
              key: '4',
              icon:<Link to="/AdminOrders"><FaFirstOrder /></Link>  ,
              label: 'Orders',
            },
            {
              key: '5',
              icon:<Link to="/Customers"><FaUsers /></Link> ,
              label: 'Customers',
            },
            // {
            //   key: '6',
            //   icon:<Link to="/AdminBrands"><TbBrandSafari /></Link> ,
            //   label: 'Brands',
            // },
            {
              key: '7',
              icon:<Link to="/Adminlogout"><FcFeedback /></Link> ,
              label: 'Reviews',
            },
            {
              key: '8',
              icon:<Link to="/Adminlogout"><CiLogout /></Link> ,
              label: 'Logout',
            }
            
          ]}
          />
      </Sider>
 
      <Layout>
        <Content
        className="Admin-Content"
          style={{
            margin: '0px ',
            minHeight: 280,
            background: colorBgContainer,

          }}
        >
        <div className="Admin-Header">
          WatchStore
        </div>
       <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;