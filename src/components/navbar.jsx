import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  const handleNavigate = (path, label) => {
    navigate(path);
    toast.info(`Navigated to ${label}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo" onClick={() => handleNavigate("/home", "Home")}>MyShop</div>
      </div>

      <div className="navbar-center">
        <span onClick={() => handleNavigate("/home", "Home")}>Home</span>
        <span onClick={() => handleNavigate("/products", "Products")}>Products</span>
        <span onClick={() => handleNavigate("/about", "About Us")}>About</span>
        <span onClick={() => handleNavigate("/contact", "Contact")}>Contact</span>
      </div>

      <div className="navbar-right">
        <span onClick={() => handleNavigate("/cart", "Cart")}>Cart 🛒</span>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
