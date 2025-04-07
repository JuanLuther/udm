import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/layout/Sidebar";

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
    <div className="d-flex">
      <Sidebar menuItems={menuItems} />
      <div className="content p-4">
        <h2>Main Content Area</h2>
        <p>Your page content goes here.</p>
      </div>
    </div>
  );
}

export default App;
