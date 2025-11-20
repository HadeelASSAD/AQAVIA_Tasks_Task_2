import React from "react";

function AdminDashboard() {
  return (
    <div style={{ 
        padding: "40px", 
        minHeight: "calc(100vh - 60px)",
        background: "white"
    }}>
      <h2 style={{ color: "#2d3748", marginBottom: "30px" }}>Admin Dashboard</h2>
      <div style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "30px",
          borderRadius: "12px",
          color: "white"
      }}>
          <p style={{ fontSize: "18px", margin: 0 }}>Welcome to the Admin Dashboard</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
