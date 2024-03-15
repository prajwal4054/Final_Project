import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

export function CategoryById() {
  const token=localStorage.getItem("token");
  const [formData, setFormData] = useState("");
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCategoryById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8060/productandcategory/ecommerceapp/api/v1/category/getcategorybyfield?field=id&&value=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCategoryData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      toast.error("Category Id not found");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = e.target[0].value;
    await getCategoryById(id);
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
              <label htmlFor="productId">Enter Category ID:</label>
              <input
                type="text"
                className="form-control"
                id="productId"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-dark mt-2">
              Get Category
            </button>
          </form>
        </div>
      </div>

      {categoryData && (
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{categoryData.name}</h5>
            <p className="card-text">Description: {categoryData.categoryDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export function CategoryByName() {
  const token=localStorage.getItem("token");
  const [formData, setFormData] = useState();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const getprodonsubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    let data = {
      name: e.target[0].value,
    };
    setFormData(data);
    try {
      const response = await axios.get(
        `http://localhost:8060/productandcategory/ecommerceapp/api/v1/category/getcategorybyfield?field=name&&value=${e.target[0].value}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data[0]);

      setData(response.data[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      toast.error("Category doesnt exist");
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
              Get Category
            </button>
          </form>
        </div>
      </div>
      {data && (
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">Description: {data.categoryDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
}
