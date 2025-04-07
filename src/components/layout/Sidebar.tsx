import { useState } from "react";
import { NavLink } from "react-router-dom";

interface MenuItem {
  link: string;
  icon: string;
  name: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar = ({ menuItems }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`sidebar bg-dark text-white ${isCollapsed ? "collapsed" : ""}`}
      style={{
        width: isCollapsed ? "60px" : "250px",
        minHeight: "100vh",
        transition: "width 0.3s ease",
      }}
    >
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
        {!isCollapsed && <h5 className="m-0">Menu</h5>}
        <button
          className="btn btn-sm btn-outline-light"
          onClick={toggleSidebar}
        >
          {isCollapsed ? "»" : "«"}
        </button>
      </div>

      <ul className="nav flex-column p-2">
        {menuItems.map((item, index) => (
          <li className="nav-item mb-2" key={index}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `nav-link d-flex align-items-center ${
                  isActive ? "active bg-primary" : "text-white"
                }`
              }
            >
              <i className={`bi ${item.icon} me-2`}></i>
              {!isCollapsed && <span>{item.name}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
