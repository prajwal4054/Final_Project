import React from "react";
import { useState } from "react";
import { FaUserCircle, FaCartArrowDown } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/Navbar.css";

export const ProductNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark p-2">
      <div className="container-fluid">
        <Link to="/products" className="navbar-brand">
          Shopify
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={"collapse navbar-collapse " + (menuOpen ? "show" : "")}>
          {/* Right-aligned links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ fontSize: "12px" }}>
            <li className="nav-item">
              <NavLink to="/products/addproduct" className="nav-link">
                Add Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/categories" className="nav-link">
                Categories 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products/productlist" className="nav-link">
                Product List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products/productbyid" className="nav-link">
                Product ById
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products/productbyname" className="nav-link">
                Product ByName
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products/updateproductbyid" className="nav-link">
                Update Product ById
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products/deleteproduct" className="nav-link">
                Delete Product
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Right-aligned user and logout links (unchanged) */}
            <li className="nav-item">
              <NavLink to="*" className="nav-link">
                <FaUserCircle />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <IoIosLogOut />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ProductNavbar;
