import React, { startTransition, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
var url;
const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setcategory] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    setLoading(true);
    getProducts();

    setLoading(false);
  }, []);
  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8060/productandcategory/ecommerceapp/api/v1/product/getproducts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setProductData(response.data);

      // console.log(productData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  //const productData=getAllProducts();
  return loading ? (
    <Spinner />
  ) : (
    <div className="justify-content-center row mt-2 ">
      <h3 className="text-center text-white p-3 ">Available Products</h3>

      {productData.map(
        (p) => (
          (url = `https://source.unsplash.com/featured/?${encodeURIComponent(
            p.productName
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
                <h5 class="card-title mt-2">ProdId: {p.productId}</h5>

                <h5 class="card-title">ProdName: {p.productName}</h5>
                <h6 class="card-subtitle mb-2 ">
                  Price: &#8377;{p.productPrice}
                </h6>

                <p class="card-text">Description: {p.productDescription}</p>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};
export default ProductList;
