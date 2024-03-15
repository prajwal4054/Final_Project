import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { deleteCategoryById } from "./Service";

export function DeleteProduct() {
  const token=localStorage.getItem("token");
  const [formData, setFormData] = useState({});
  const handlesubmit = async (e) => {
    e.preventDefault();
    let data = {
      id: e.target[0].value,
    };
    setFormData(data);
    try {
      const response = await axios.delete(
        `http://localhost:8060/productandcategory/ecommerceapp/api/v1/product/deleteproduct/${e.target[0].value}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      // if(response.status==200){
      //   alert("successfully Registered ....!")
      // }

      toast.success("Product deleted successfully");

      //setResponseData(response.data);// storing but never used : no use of stroing since its post
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  return (
    <div
      className="container"
      style={{
        marginTop: "100px",
        marginLeft: "25px",
        border: "solid",
        width: "100vw",
      }}
    >
      <h3 className="text-center">
        {" "}
        Enter product Id which you want to Delete...
      </h3>
      <div className="row  justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handlesubmit}>
            Enter ProductId:
            <input type="text" className="form-control " />
            <div className="text-center">
              <button className="btn btn-dark mt-2 text-center" type="submit">
                Delete
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export function DeleteCategory() {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({});
  const handlesubmit = async (e) => {
    e.preventDefault();
    let data = {
      id: e.target[0].value,
    };
    console.log(data);
    setFormData(data);
    console.log(formData.id);
    try {
      const response = await axios.delete(
        `http://localhost:8060/productandcategory/ecommerceapp/api/v1/category/deletecategory/${e.target[0].value}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      // if(response.status==200){
      //   alert("successfully Registered ....!")
      // }

      toast.success("Category deleted successfully");

      //setResponseData(response.data);// storing but never used : no use of stroing since its post
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  return (
    <div
      className="container"
      style={{
        marginTop: "100px",
        marginLeft: "25px",
        border: "solid",
        width: "100vw",
      }}
    >
      <h3 className="text-center">
        {" "}
        Enter Category Id which you want to Delete...
      </h3>
      <div className="row  justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handlesubmit}>
            Enter CategoryId:
            <input type="text" className="form-control " />
            <div className="text-center">
              <button className="btn btn-dark mt-2 text-center" type="submit">
                Delete
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
