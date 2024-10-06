// components/SharedMenu.tsx
import { FileTextOutlined, UserOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { RoutePath } from "../../constants/path";

type MenuItem = Required<MenuProps>['items'][number];

export const LISTMENU: MenuItem[] = [

  {
    key: 'account',
    label: (
      <a href={`http://localhost:5173/${RoutePath.PRODUCTS}`}>Quản lý  phẩm</a>
    ),
    icon: <UserOutlined />,
  },
  {
    key: 'cate',
    label: (
      <a href={`http://localhost:5173/${RoutePath.CATEGORY}`}>Quản lý danh mục</a>
    ),
    icon: <FileTextOutlined />,
  },

];
