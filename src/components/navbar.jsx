import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import "./Navbar.css"; // Create this file for styling

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/home")}>MyShop</div>
      <div className="nav-links">
        <span onClick={() => navigate("/home")}>Home</span>
        <span onClick={() => navigate("/products")}>Products</span>
        <span onClick={() => navigate("/about")}>About Us</span>
        <span onClick={() => navigate("/contact")}>Contact</span>
        <span onClick={() => navigate("/cart")}>Cart 🛒</span>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
