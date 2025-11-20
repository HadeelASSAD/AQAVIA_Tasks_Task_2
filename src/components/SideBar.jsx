import React from "react";
import { Link } from "react-router-dom";
import "../StyleSheet/NavStyles.css";
function Sidebar() {
  return (
    <aside>
      <h3>Admin</h3>
      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
