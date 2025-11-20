import React from "react";
import { Link } from "react-router-dom";
import { getRole } from "../routes/RequireRole";

function UserHome() {
  const role = getRole();
  return (
    <div style={{ 
      padding: "40px", 
      minHeight: "calc(100vh - 60px)",
      background: "white"
    }}>
      <h2 style={{ color: "#2d3748", marginBottom: "30px" }}>Welcome back 😊</h2>
      {role === "user" ? (
        <div style={{ 
          background: "white", 
          padding: "30px", 
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
        }}>
          <h3 style={{ color: "#5a67d8" }}>القائمة الخاصة بالمستخدم</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ margin: "15px 0" }}>
              <Link to="/profile" style={{ 
                fontSize: "16px", 
                padding: "10px 15px",
                display: "inline-block"
              }}>Show my profile.</Link>
            </li>
            <li style={{ margin: "15px 0" }}>
              <Link to="/reset-password" style={{ 
                fontSize: "16px", 
                padding: "10px 15px",
                display: "inline-block"
              }}>Change my PassWord.</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div style={{ 
          background: "white", 
          padding: "30px", 
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
        }}>
          <h3 style={{ color: "#5a67d8" }}>القائمة الخاصة بالآدمن</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ margin: "15px 0" }}>
              <Link to="/admin" style={{ 
                fontSize: "16px", 
                padding: "10px 15px",
                display: "inline-block"
              }}>AdminDashboard</Link>
            </li>
            <li style={{ margin: "15px 0" }}>
              <Link to="/admin/users" style={{ 
                fontSize: "16px", 
                padding: "10px 15px",
                display: "inline-block"
              }}>AdminUsers</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default UserHome;
