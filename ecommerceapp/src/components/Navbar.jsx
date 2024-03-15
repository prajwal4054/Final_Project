import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "../components/styles/Navbar.css";
import { Link, NavLink, useNavigate} from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Shopify
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/cart">
            <FaCartArrowDown />
          </NavLink>
        </li>
        <li>
          <NavLink to="*" >
            <FaUserCircle />
          </NavLink>
        </li>
        <li><NavLink to="/"><IoIosLogOut /></NavLink></li>
      </ul>
    </nav>
  );
};
