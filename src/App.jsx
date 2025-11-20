import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import AdminUsers from "./admin/AdminUsers.jsx";
import UserHome from "./user/UserHome.jsx";
import Profile from "./user/Profile.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";
import ResetPassword from "./auth/ResetPassword.jsx";
import RequiredRole from "./routes/RequireRole.jsx";
import Navbar from "./components/NavBar.jsx";
import Sidebar from "./components/SideBar.jsx";
import "./StyleSheet/AuthStyles.css";
import "./StyleSheet/AppStyle.css";
import "./StyleSheet/NavStyles.css";

function App() {
  return (
    <Routes>
      {/* Auth pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User pages */}
      <Route
        path="/home"
        element={
          <RequiredRole allowedRoles={["user", "admin"]}>
            <div>
              <Navbar />
              <UserHome />
            </div>
          </RequiredRole>
        }
      />
      <Route
        path="/profile"
        element={
          <RequiredRole allowedRoles={["user", "admin"]}>
            <div>
              <Navbar />
              <Profile />
            </div>
          </RequiredRole>
        }
      />
      <Route
        path="/reset-password"
        element={
          <RequiredRole allowedRoles={["user", "admin"]}>
            <ResetPassword />
          </RequiredRole>
        }
      />

      {/* Admin pages */}
      <Route
        path="/admin"
        element={
          <RequiredRole allowedRoles={["admin"]}>
            <div className="SideBar">
              <Sidebar />
              <div className="NavBar">
                <Navbar />
                <AdminDashboard />
              </div>
            </div>
          </RequiredRole>
        }
      />
      <Route
        path="/admin/users"
        element={
          <RequiredRole allowedRoles={["admin"]}>
            <div className="SideBar">
              <Sidebar />
              <div className="NavBar">
                <Navbar />
                <AdminUsers />
              </div>
            </div>
          </RequiredRole>
        }
      />

      {/* Not found */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
