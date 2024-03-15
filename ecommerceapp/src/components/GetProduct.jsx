import React, { useState } from "react";
import axios from "axios";
import { getProductById } from "./Service";
import { toast } from "react-toastify";

export function ProductById() {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState("");
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = e.target[0].value;
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8060/productandcategory/ecommerceapp/api/v1/product/getproductbyfield?field=id&&value=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setProductData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      alert("Product ID not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container"
      style={{ marginTop: "100px", marginLeft: "250px", width: "50vw" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="productId">Enter Product ID:</label>
              <input
                type="text"
                className="form-control"
                id="productId"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-dark mt-2">
              Get Product
            </button>
          </form>
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {productData && (
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{productData.productName}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Price: ₹{productData.productPrice}
            </h6>
            <p className="card-text">
              Description: {productData.productDescription}
            </p>
            <p className="card-text">
              Category: {productData.categoryList[0].name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function ProductByName() {
  const [formData, setFormData] = useState();
  const [data, setData] = useState({});
  const token = localStorage.getItem("token");
  const getprodonsubmit = async (e) => {
    e.preventDefault();
    let data = {
      id: e.target[0].value,
    };
    setFormData(data);
    try {
      const response = await axios.get(
        `http://localhost:8060/productandcategory/ecommerceapp/api/v1/product/getproductbyfield?field=name&&value=${e.target[0].value}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data[0]);

      setData(response.data[0]);
      toast.success("Products fetched successfully")
    } catch (error) {
      console.error("Error fetching data:", error.message);
      toast.error("Product with this name not exist");
    }
  };

  return (
    <div
      className="container"
      style={{ marginTop: "100px", marginLeft: "250px", width: "50vw" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={getprodonsubmit}>
            Enter Name:
            <input type="text" className="form-control " />
            <button className="btn btn-dark mt-2" type="submit">
              GetProduct
            </button>
          </form>
        </div>
      </div>
      {data && (
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{data.productName}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Price: ₹{data.productPrice}
            </h6>
            <p className="card-text">Description: {data.productDescription}</p>
            {/* <p className="card-text">Category: {data.categoryList[0].name}</p> */}
          </div>
        </div>
      )}
    </div>
  );
}
