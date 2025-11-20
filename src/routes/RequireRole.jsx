import React from "react";
import { Navigate, Outlet } from "react-router-dom";
export const getRole = () => localStorage.getItem("role");
export const setRole = (role) => localStorage.setItem("role", role);
export const clearRole = () => localStorage.removeItem("role");
export const isAuthenticated = () => !!getRole();

function RequiredRole({ allowedRoles, children }) {
  const role = getRole();

  // not logged in
  if (!role) return <Navigate to="/login" replace />;

  // not allowed to access this route
  if (!allowedRoles?.includes(role)) return <Navigate to="/" replace />;

  // allowed
  return children ? children : <Outlet />;
}

export default RequiredRole;
