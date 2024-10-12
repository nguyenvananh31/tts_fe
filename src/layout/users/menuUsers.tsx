// components/SharedMenu.tsx
import { MenuProps } from "antd";
import { RoutePath } from "../../constants/path";

type MenuItem = Required<MenuProps>['items'][number];

export const LISTMENU_USERS: MenuItem[] = [

  {
    key: '1',
    label: (
      <a href={`http://localhost:5173/${RoutePath.PRODUCTS}`}>Trang Chủ</a>
    ),
  },
  {
    key: '2',
    label: (
      <a href={`http://localhost:5173/${RoutePath.CATEGORY}`}>Sản Phẩm</a>
    ),
  },
];
