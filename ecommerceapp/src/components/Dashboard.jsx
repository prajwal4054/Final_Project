import React, { useEffect, useState } from "react";
import "./styles/dash.css";

export default function Dashboard() {
  const [state, setState] = useState(false);

  useEffect(() => {
    function handleResize() {
      // You can adjust the font size based on window.innerWidth
      // For example, reduce font size when window width is less than a certain value
      if (window.innerWidth < 600) {
        document.getElementById("shopify-text").style.fontSize = "48px";
        document.querySelectorAll(".text").forEach((element) => {
          element.style.fontSize = "24px";
        });
        document.getElementById("numberClass").style.flexDirection = "column";
      } else {
        document.getElementById("shopify-text").style.fontSize = "100px";
        document.querySelectorAll(".text").forEach((element) => {
          element.style.fontSize = ""; // Reset font size to default
        });
        document.getElementById("numberClass").style.flexDirection = "row";
      }
    }
    window.addEventListener("resize", handleResize);
    // Call handleResize initially to set the font size based on initial window size
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ height: "90vh" }}>
      <div className="Poster" style={{ zIndex: -1 }}>
        <h1 id="shopify-text" className="animate-charcter">
          SHOPIFY
        </h1>
      </div>

      {
        <div className="row">
          <div
            id="numberClass"
            // style={{ display: "flex", flexDirection: "row" }}
          >
            <div className="paper col-md-4 text-center">
              <div className="paper-head">
                <p className="text">Sales</p>
              </div>
              <div className="paper-number">
                <div className="c3"></div>
                <p className="text">+</p>
              </div>
            </div>
            <div className="paper col-md-4 text-center">
              <div className="paper-head">
                <p className="text">Discounts </p>
              </div>
              <div className="paper-number">
                <span className="c2"></span>
                <p className="text">+</p>
              </div>
            </div>
            <div className="paper col-md-4 text-center">
              <div className="paper-head">
                <p className="text">Users</p>
              </div>
              <div className="paper-number">
                <span className="c1"></span>
                <p className="text">+</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
