import { Route, Routes } from "react-router-dom";
import BaseLayoutAdmin from "../layout/admin/BaseLayoutAdmin.tsx";

import { RoutePath } from "../constants/path";
import DashboardProducts from "../pages/admin/products/DashboardProducts.tsx";
import DashboardCate from "../pages/admin/categories/DashboardCate.tsx";
import AddProduct from "../pages/admin/products/AddProduct.tsx";
import EditProduct from "../pages/admin/products/EditProduct.tsx";

const Router = () => {

  return (
    <>
      <Routes>
        <Route path={RoutePath.ADMIN} element={ <BaseLayoutAdmin /> } >

         <Route path={RoutePath.PRODUCTS} element={ <DashboardProducts /> } />
         <Route path={RoutePath.ADD_PRODUCTS} element={ <AddProduct /> } />
         <Route path={RoutePath.EDIT_PRODUCTS} element={ <EditProduct /> } />

         <Route path={RoutePath.CATEGORY} element={ <DashboardCate /> } />
         </Route>
      </Routes>
    </>
  );
};

export default Router;