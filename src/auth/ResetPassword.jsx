import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../StyleSheet/ResetPasswordStyles.css";

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // success or error

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlertMessage("Password must be at least 6 characters long!");
      setAlertType("error");
      setShowAlert(true);
      return;
    }

    if (password !== confirmPassword) {
      setAlertMessage("Passwords do not match!");
      setAlertType("error");
      setShowAlert(true);
      return;
    }

    setAlertMessage("Password changed successfully!");
    setAlertType("success");
    setShowAlert(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-box">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="text"
            placeholder="Enter your new Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="text"
            placeholder="Confirm your new Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
          <button type="button" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </form>
      </div>

      {showAlert && (
        <div className="alert-popup">
          <div className="alert-icon">
            {alertType === "success" ? "✅" : "❌"}
          </div>
          <p className={`alert-message ${alertType}`}>
            {alertMessage}
          </p>
          <button
            onClick={closeAlert}
            className={`alert-button ${alertType}`}
          >
            OK
          </button>
        </div>
      )}

      {showAlert && (
        <div className="alert-backdrop" onClick={closeAlert}></div>
      )}
    </div>
  );
}

export default ResetPassword;
