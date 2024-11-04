import { Route, Routes } from "react-router-dom";
import BaseLayoutAdmin from "../layout/admin/BaseLayoutAdmin.tsx";

import { RoutePath } from "../constants/path";
import DashboardProducts from "../pages/admin/products/DashboardProducts.tsx";
import DashboardCate from "../pages/admin/categories/DashboardCate.tsx";
import AddProduct from "../pages/admin/products/AddProduct.tsx";
import EditProduct from "../pages/admin/products/EditProduct.tsx";
import LayoutUsers from "../layout/users/LayoutUsers.tsx";
import Home from "../pages/user/Home.tsx";
import NotFound from "../pages/user/404.tsx";
import About from "../pages/user/About.tsx";
import CheckOut from "../pages/user/CheckOut.tsx";
import Contact from "../pages/user/Contact.tsx";
import News from "../pages/user/News.tsx";
import NewDetail from "../pages/user/NewDetail.tsx";
import ShopCart from "../pages/user/ShopCart.tsx";
import Reservation from "../pages/user/Reservation.tsx";
import Shop from "../pages/user/Shop.tsx";
import ShopSingle from "../pages/user/ShopSingle.tsx";
import TeamDetail from "../pages/user/TeamDetail.tsx";
import Team from "../pages/user/Team.tsx";

const Router = () => {

  return (
    <>
      <Routes>
        <Route path={RoutePath.CLI} element={<LayoutUsers />}>
          <Route path={RoutePath.CLI_HOME} element={<Home />} />
          <Route path={RoutePath.CLI_NOTFOUND} element={<NotFound />} />
          <Route path={RoutePath.CLI_ABOUT} element={<About />} />
          <Route path={RoutePath.CLI_CHECKOUT} element={<CheckOut />} />
          <Route path={RoutePath.CLI_CONTACT} element={<Contact />} />
          <Route path={RoutePath.CLI_NEWS} element={<News />} />
          <Route path={RoutePath.CLI_NEWDETAIL} element={<NewDetail />} />
          <Route path={RoutePath.CLI_CART} element={<ShopCart />} />
          <Route path={RoutePath.CLI_RESERVATION} element={<Reservation />} />
          <Route path={RoutePath.CLI_SHOP} element={<Shop />} />
          <Route path={RoutePath.CLI_SHOPSINGLE} element={<ShopSingle />} />
          <Route path={RoutePath.CLI_TEAMDETAIL} element={<TeamDetail />} />
          <Route path={RoutePath.CLI_TEAM} element={<Team />} />
        </Route>
        <Route path={RoutePath.ADMIN} element={<BaseLayoutAdmin />} >
          {/* PRODUCT */}
          <Route path={RoutePath.PRODUCTS} element={<DashboardProducts />} />
          <Route path={RoutePath.ADD_PRODUCTS} element={<AddProduct />} />
          <Route path={RoutePath.EDIT_PRODUCTS} element={<EditProduct />} />
          {/* CATEGORY */}
          <Route path={RoutePath.CATEGORY} element={<DashboardCate />} />
        </Route>



      </Routes>
    </>
  );
};

export default Router;