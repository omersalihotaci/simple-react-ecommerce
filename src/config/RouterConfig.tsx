import {Routes,Route,Navigate} from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register";

import FullHome from "../pages/FullHome";
import ProtectedRoute from "../components/ProtectedRoute";
import ProductDetail from "../components/ProductDetail";
function RouterConfig() {
  return (
      <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route  path="product-detail/:id" element={<ProductDetail/>}   />
          <Route
              path="/home"
              element={
                  <ProtectedRoute>
                      <FullHome />
                  </ProtectedRoute>
              }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default RouterConfig



