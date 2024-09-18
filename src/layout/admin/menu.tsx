// components/SharedMenu.tsx
import { FileTextOutlined, UserOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { RoutePath } from "../../constants/path";

type MenuItem = Required<MenuProps>['items'][number];

export const LISTMENU: MenuItem[] = [
 
  {
    key: 'account',
    label: 'Quản lý Sản Phẩm',
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
