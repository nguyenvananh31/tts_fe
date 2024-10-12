import { Menu } from "antd";
import React from "react";
import { LISTMENU_USERS } from "./menuUsers";
const Navbar: React.FC = () => {
  return (
      <Menu
      className="flex justify-center"
        defaultSelectedKeys={['1']}
        mode="horizontal"
        theme="light"
        items={LISTMENU_USERS}
      />
  );
};

export default Navbar;
