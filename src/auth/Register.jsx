import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../StyleSheet/AuthStyles.css";

function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      phoneNumber.length === 10 &&
      firstName.length > 0 &&
      lastName.length > 0
    ) {
      navigate("/login");
    }
  };

  return (
    <div className="auth-container">
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            className="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="tel"
            className="phone"
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="Enter your phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        <button onClick={() => navigate("/login")}>
          Already have account? Login!
        </button>
      </div>
    </div>
  );
}

export default Register;
