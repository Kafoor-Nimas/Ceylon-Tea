import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Public Store Layout & Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PublicLayout from "./layouts/PublicLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLayout from "./layouts/AdminLayout";

// Admin Layout & Pages
import AddProduct from "./pages/admin/AddProduct";
import ManageProducts from "./pages/admin/ManageProducts";
import ManageOrders from "./pages/admin/ManageOrders";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* 2. Admin Panel Routes (Nested inside AdminLayout) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products" element={<ManageProducts />} />
          <Route path="orders" element={<ManageOrders />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 3. Catch-all Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
