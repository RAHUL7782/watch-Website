import { Route, Routes } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AdminAllProduct from "./AdminAllProduct/AdminAllProduct";
import AdminAddProduct from "./AdminAddProduct/AdminAddProduct";
import AdminOrders from "./AdminOrders/AdminOrders";
const AdminRoutes = () => {
  return (
    <Routes>
      <Route  path="/" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path="/AdminDashboard" element={<AdminDashboard />} />
      <Route path="/AdminAllProduct" element={<AdminAllProduct />} />
      <Route path="/AdminAddProduct" element={<AdminAddProduct />} />
      <Route path="/AdminOrders" element={<AdminOrders />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
