import React, { useState } from "react";
import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInAnonymously,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Update display name in Firebase Auth profile
      await updateProfile(user, {
        displayName: formData.name,
      });

      // Save user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: formData.name,
        email: formData.email,
        createdAt: new Date(),
      });

      toast.success("Signup successful!");
      navigate("/login");
    } catch (err) {
      toast.error(err.message || "Signup failed");
    }
  };

  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      toast.success("Logged in as Guest");
      navigate("/home");
    } catch (err) {
      toast.error(err.message || "Guest login failed");
    }
  };

  return (
    <div className="page-wrapper">
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
    </div>
  );
};

export default Signup;
