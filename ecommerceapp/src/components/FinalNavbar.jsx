import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../components/Images/logo1.png";
import '../components/styles/nav.css'

export default function FinalNavbar() {
  const navigate = useNavigate();

  function signUp() {
    navigate("/signUp");
  }

  const SignIn = () => {
    navigate("/signIn");
  };

  return (
    <div className="navbar">
      <div className="flexClass">
        <img src={logo} alt="Logo" />
        {
          <div className="options" id="option">
            <ul>
              <li>
                <Link to="./" style={{fontSize:"20px"}}>Shopify</Link>
              </li>
            </ul>
          </div>
        }
      </div>
      <div className="rightCorner">
        <button type="button" className="btn" onClick={SignIn}>
          Sign In
        </button>

        {
          <div id="signUp">
            <button type="button" className="signUp" onClick={signUp}>
              Sign Up
            </button>
          </div>
        }
      </div>
    </div>
  );
}
