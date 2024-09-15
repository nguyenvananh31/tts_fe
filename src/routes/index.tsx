import { Route, Routes } from "react-router-dom";
import BaseLayoutAdmin from "../layout/admin/BaseLayoutAdmin.tsx";

import { RoutePath } from "../constants/path";
import DashboardProducts from "../pages/admin/products/DashboardProducts.tsx";

const Router = () => {

  return (
    <>
      <Routes>
        <Route path={RoutePath.ADMIN} element={ <BaseLayoutAdmin /> } >
         <Route path={RoutePath.PRODUCTS} element={ <DashboardProducts /> } />
         </Route>
      </Routes>
    </>
  );
};

export default Router;