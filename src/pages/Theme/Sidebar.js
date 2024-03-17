import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className="left">
        <li>
          <Link to="/user-management"> User management</Link>
        </li>
        <li>
          <Link to="/menu"> menu</Link>
        </li>
        <li>
          <Link to="/faq"> FAQ </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
