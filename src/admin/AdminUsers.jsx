import React from "react";

function AdminUsers() {
  return (
    <div style={{ 
        padding: "40px", 
        minHeight: "calc(100vh - 60px)",
        background: "white"
    }}>
      <h1 style={{ color: "#2d3748", marginBottom: "30px" }}>Admin Users</h1>
      <div style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>
          <p style={{ color: "#4a5568" }}>Manage users from this section</p>
      </div>
    </div>
  );
}

export default AdminUsers;
