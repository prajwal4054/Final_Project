import axios from "axios";
import React, { useState, useEffect, startTransition } from "react";
import {toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function AddProd() {
  const navigate = useNavigate();
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
      console.error("Error fetching categories:", error);
    }
  };

  const [formdata, setFormData] = useState({});
  const [catname, setcatname] = useState({});
  const handlesubmit = async (e) => {
    e.preventDefault();

    const cname = e.target[3].value;
    console.log(cname);
    try {
      const response = await axios.get(
        `http://localhost:8060/productandcategory/ecommerceapp/api/v1/category/getcategorybyfield?field=name&&value=${cname}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
      setcatname(response.data);
      var cid = response.data[0].categoryId;
      console.log(cid);
    } catch (error) {
      console.log("error in fetching category: " + error);
    }
    let data = {
      productName: e.target[0].value,
      productPrice: e.target[1].value,
      productDescription: e.target[2].value,
    };
    console.log(data);

    try {
      const res = await axios.post(
        "http://localhost:8060/productandcategory/ecommerceapp/api/v1/product/addproduct",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const linkProdCategory = await axios.post(
        `http://localhost:8060/productandcategory/ecommerceapp/api/v1/link/createlink?productId=${res.data.productId}&&categoryId=${cid}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      setFormData(res.data);
    } catch (error) {
      console.log("error in adding product: " + error);
      toast.error("Error in adding new user");
    } finally {
      toast.success("Product added successfully");
      navigate("/products");
    }
  };

  return (
    <div className="container" style={{ margin: "150px" }}>
      <div className="row  justify-content-center">
        <h2 className="card text-center text-light p-3 bg-dark">
          Add Product here..{" "}
        </h2>
        <div className="col-md-6">
          <form onSubmit={handlesubmit} className="">
            ProdName: <input type="text" className="form-control " /> <br></br>
            Price: <input type="text" className="form-control " /> <br></br>
            Description: <input type="text" className="form-control " />{" "}
            <br></br>
            CategoryName:
            <select className="form-control">
              {categoryData.map((cat) => (
                <option key={cat.categoryId} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
            <br></br>
            <button className="btn btn-dark" type="submit">
              Add Product
            </button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

//category add

export function AddCategory() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    name: "",
    categoryDescription: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8060/productandcategory/ecommerceapp/api/v1/category/addcategory",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      // alert("Category added successfully!");
      toast.success("Category added successfully!");
      navigate("/categories");
      // Clear form fields after successful submission
      setFormData({
        categoryName: "",
        des: "",
      });
    } catch (error) {
      console.log("Error in adding category: " + error);
    }
  };

  return (
    <div className="container" style={{ margin: "150px" }}>
      <div className="row justify-content-center">
        <h2 className="card text-center text-light p-3 bg-dark">
          Add Category here..{" "}
        </h2>
        <br></br>
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="">
            <div className="form-group">
              <label htmlFor="categoryName">Category Name:</label>
              <input
                type="text"
                className="form-control"
                id="categoryName"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <br></br>
            <div className="form-group">
              <label htmlFor="description">Category Description:</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="categoryDescription"
                value={formData.categoryDescription}
                onChange={handleChange}
              />
            </div>
            <br></br>
            <button className="btn btn-dark" type="submit">
              Add Category
            </button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}
