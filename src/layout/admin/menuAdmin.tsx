// components/SharedMenu.tsx
import { FileTextOutlined, UserOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { RoutePath } from "../../constants/path";

type MenuItem = Required<MenuProps>['items'][number];

export const LISTMENU_ADMIN: MenuItem[] = [

  {
    key: 'account',
    label: (
      <a href={`http://localhost:5173/admin/${RoutePath.PRODUCTS}`}>Quản lý sản phẩm</a>
    ),
    icon: <UserOutlined />,
  },
  {
    key: 'cate',
    label: (
      <a href={`http://localhost:5173/admin/${RoutePath.CATEGORY}`}>Quản lý danh mục</a>
    ),
    icon: <FileTextOutlined />,
  },

];
