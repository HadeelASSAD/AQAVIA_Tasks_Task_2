import React from "react";
import { useNavigate } from "react-router-dom";
import { clearRole } from "../routes/RequireRole";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    clearRole();
    navigate("/login");
  };
  return (
    <nav>
      <div>AQAVIA App</div>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/profile")}>Profile</button>
        <button onClick={handleLogout}>LogOut</button>
      </div>
    </nav>
  );
}

export default Navbar;
