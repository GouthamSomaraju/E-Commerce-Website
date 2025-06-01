import React, { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async () => {
    setError("");
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGuestLogin = async () => {
    setError("");
    try {
      await signInAnonymously(auth);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="User icon" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src={email_icon} alt="Email icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>

      {error && (
        <div style={{ color: "red", marginLeft: "40px", marginTop: "10px" }}>
          {error}
        </div>
      )}

      <div className="forgot-password">
        Already have an account?{" "}
        <span onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
          Login
        </span>
      </div>

      <div className="submit-container" style={{ flexDirection: "column", gap: "15px" }}>
        <div className="submit" onClick={handleSignup}>
          Sign Up
        </div>
        
        <div className="submit gray" onClick={handleGuestLogin}>
          Continue as Guest
        </div>
      </div>
    </div>
  );
};

export default Signup;
