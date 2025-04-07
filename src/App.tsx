import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  const menuItems = [
    { name: "Dashboard", icon: "bi-speedometer2", link: "/" },
    { name: "Orders", icon: "bi-cart", link: "/orders" },
    { name: "Products", icon: "bi-box", link: "/products" },
    { name: "Customers", icon: "bi-people", link: "/customers" },
    { name: "Reports", icon: "bi-file-earmark-text", link: "/reports" },
    { name: "Settings", icon: "bi-gear", link: "/settings" },
  ];
  return (
    <Router>
      <div className="d-flex">
        <Sidebar menuItems={menuItems} />
        <div className="content p-4 w-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
