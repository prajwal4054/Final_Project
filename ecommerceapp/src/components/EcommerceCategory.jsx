import React, { startTransition, useEffect, useState } from "react";
import axios from "axios";
// import productData from "../content";
import { getAllCategories } from "./Service";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";
var url;
const EcommerceCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  useEffect(() => {
    setLoading(true);
    getCategories();

    setLoading(false);
  }, []);
  const getCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8060/productandcategory/ecommerceapp/api/v1/category/getcategories",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setCategoryData(response.data);
      // console.log(productData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  //const productData=getAllProducts();
  return loading ? (
    <h1 style={{ textAlign: "center", margin: "300px" }}>
      Please log In to see products
    </h1>
  ) : (
    // <div style={{ backgroundColor: "white", height: "100vh" }}>
    //   <div className="justify-content-center row rw">
    //     {categoryData.map(
    //       (p) => (
    //         (url = `https://source.unsplash.com/featured/?${encodeURIComponent(
    //           p.name
    //         )}`),
    //         (
    //           <div
    //             class="card cd "
    //             style={{ backgroundColor: " rgb(243, 234, 234)" }}
    //           >
    //             <div class="card-body">
    //               <div className="category-card-img ">
    //                 <img
    //                   src={url}
    //                   className="img-fluid"
    //                   alt="phone"
    //                   style={{ height: "200px", width: "100vw" }}
    //                 />
    //               </div>
    //               <h5 class="card-title">{p.name}</h5>
    //               <p class="card-text">{p.categoryDescription}</p>

    //               <a href="#" class="card-link">
    //                 More Details
    //               </a>
    //             </div>
    //           </div>
    //         )
    //       )
    //     )}
    //   </div>
    // </div>
    <div className="justify-content-center row mt-2 ">
      <h3 className="text-center text-white p-3 ">Available Products</h3>

      {categoryData.map(
        (p) => (
          (url = `https://source.unsplash.com/featured/?${encodeURIComponent(
            p.name
          )}`),
          (
            <div
              class="card cd"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <div class="card-body">
                <img
                  class="card-img-top"
                  src={url}
                  alt="Card image cap"
                  width="250px"
                  height="250px"
                />
                <h5 class="card-title mt-2">ProdId: {p.categoryId}</h5>

                <h5 class="card-title">ProdName: {p.name}</h5>
                

                <p class="card-text">Description: {p.categoryDescription}</p>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};
export default EcommerceCategory;
