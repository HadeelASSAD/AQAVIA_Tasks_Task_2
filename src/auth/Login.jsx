import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setRole } from "../routes/RequireRole";
import "../StyleSheet/AuthStyles.css";

function Login() {
  const [role, setLocalRole] = useState("user");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setRole(role);
    role === "admin" ? navigate("/admin") : navigate("/");
  };
  return (
    <div className="auth-container">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Choose</label>
            <br />
            <select value={role} onChange={(e) => setLocalRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit">Login</button>
        </form>
        <button onClick={() => navigate("/register")}>Create account !</button>
      </div>
    </div>
  );
}

export default Login;
