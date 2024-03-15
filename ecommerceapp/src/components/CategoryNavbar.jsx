import React, { useState } from "react";
import { FaUserCircle, FaCartArrowDown } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/Navbar.css";

export const CategoryNavbar = () => {
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
            {/* Contents from CategoryNavbar */}
            <li className="nav-item">
              <a className="nav-link" href="/categories/categorylist">
                Category List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categories/addcategory">
                Add Category
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categories/categorybyid">
                Category ById
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categories/categorybyname">
                Category ByName
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categories/updatecategorybyid">
                Update Category ById
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/categories/updatecategorybyname">
                Update Category ByName
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/categories/deletecategory">
                Delete Category
              </a>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
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
            {/* Add more navigation links here */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNavbar;
