import React from "react";
import { getRole } from "../routes/RequireRole";
import "../StyleSheet/NavStyles.css";

function Profile() {
  const role = getRole();

  const userProfile = {
    name: "Hadeel Asad",
    email: "hadelasad2004@gmail.com",
    phone: "0990057298",
    position: "Employee",
    department: "IT",
  };

  const adminProfile = {
    name: "Admin User",
    email: "admin@gmail.com",
    phone: "0987654321",
    position: "Administrator",
    department: "Management",
    privileges: "Full Access",
  };

  const currentProfile = role === "admin" ? adminProfile : userProfile;

  return (
    <div style={{ padding: "40px", minHeight: "calc(100vh - 60px)" }}>
      <h2 style={{ color: "#2d3748", marginBottom: "30px" }}>Profile</h2>
      <div className="profile-card">
        <h3>{currentProfile.name}</h3>
        <div>
          <p>
            <strong>Role:</strong> {role === "admin" ? "Administrator" : "User"}
          </p>
          <p>
            <strong>Email:</strong> {currentProfile.email}
          </p>
          <p>
            <strong>Phone:</strong> {currentProfile.phone}
          </p>
          <p>
            <strong>Position:</strong> {currentProfile.position}
          </p>
          <p>
            <strong>Department:</strong> {currentProfile.department}
          </p>
          {role === "admin" && (
            <p>
              <strong>Privileges:</strong> {currentProfile.privileges}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
