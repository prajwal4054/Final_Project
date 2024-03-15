import React, { useState, useEffect, startTransition } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const UpdateCategoryById = () => {
  const [category, setcategory] = useState({});
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [catname, setcatname] = useState({});
  const token = localStorage.getItem("token");
  const submithandle = async (e) => {
    e.preventDefault();

    const cid = e.target[0].value;
    try {
      const response = await axios.get(
        `http://localhost:8060/productandcategory/ecommerceapp/api/v1/category/getcategorybyfield?field=id&&value=${cid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setcategory(response.data);
    } catch (error) {
      console.log("Error in fetching category by id " + error);
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    let data = {
      categoryId: e.target[0].value,
      name: e.target[1].value,
      categoryDescription: e.target[2].value,
    };
    console.log("Form daata");
    console.log(data);
    setFormData(data);
    try {
      const res = await axios.put(
        ` http://localhost:8060/productandcategory/ecommerceapp/api/v1/category/updatecategory/${e.target[0].value}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      setFormData(res.data);
      toast.success("Category updated successfully!");
    } catch (error) {
      console.log("Error in updating Category: " + error);
    }
  };
  return (
    <div
      className="container "
      style={{ marginTop: "110px", marginLeft: "25px", width: "100vw" }}
    >
      <h3 className="text-center">
        {" "}
        Enter Category id which you want to update...
      </h3>
      <div className="row  justify-content-center">
        <div className="col-md-6">
          <form onSubmit={submithandle}>
            Enter id:
            <input type="text" className="form-control " />
            <div className="text-center">
              <button className="btn btn-dark mt-2 text-center" type="submit">
                Update
              </button>
            </div>
          </form>
          <div>
            <form onSubmit={handlesubmit} className="">
              Category Id:{" "}
              <input
                type="text"
                className="form-control "
                value={category.categoryId}
              />{" "}
              <br></br>
              Category Name: <input
                type="text"
                className="form-control "
              />{" "}
              <br></br>
              Description: <input type="text" className="form-control " />{" "}
              <br></br>
              <button className="btn btn-dark" type="submit">
                Update Category
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategoryById;

export function UpdateCategoryByName() {
  const [category, setcategory] = useState({});
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [catname, setcatname] = useState({});
  const token = localStorage.getItem("token");
  const submithandle = async (e) => {
    e.preventDefault();

    const cname = e.target[0].value;
    console.log(cname);
    try {
      console.log(1);
      const response = await axios.get(
        `http://localhost:8060/productandcategory/ecommerceapp/api/v1/category/getcategorybyfield?field=name&&value=${cname}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setcategory(response.data);
    } catch (error) {
      console.log("Error in fetching category by name " + error);
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    let data = {
      categoryId: e.target[0].value,
      name: e.target[1].value,
      categoryDescription: e.target[2].value,
    };
    console.log("Form daata");
    console.log(data);
    setFormData(data);
    try {
      const res = await axios.put(
        ` http://localhost:8060/productandcategory/ecommerceapp/api/v1/category/updatecategorybyname/${e.target[1].value}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      setFormData(res.data);
      toast.success("Category updated successfully!");
    } catch (error) {
      console.log("Error in updating Category: " + error);
    }
  };
  return (
    <div
      className="container "
      style={{ marginTop: "110px", marginLeft: "25px", width: "100vw" }}
    >
      <h3 className="text-center">
        {" "}
        Enter Category id which you want to update...
      </h3>
      <div className="row  justify-content-center">
        <div className="col-md-6">
          <form onSubmit={submithandle}>
            Enter Name:
            <input type="text" className="form-control " />
            <div className="text-center">
              <button className="btn btn-dark mt-2 text-center" type="submit">
                Update
              </button>
            </div>
          </form>
          {/* {category && (
            <div>
              <form onSubmit={handlesubmit} className="">
                Category Id:{" "}
                <input
                  type="text"
                  className="form-control "
                  value={category[0].categoryId}
                />{" "}
                <br></br>
                Category Name:{" "}
                <input
                  type="text"
                  className="form-control "
                  value={category[0].name}
                />{" "}
                <br></br>
                Description: <input
                  type="text"
                  className="form-control "
                />{" "}
                <br></br>
                <button className="btn btn-dark" type="submit">
                  Update Category
                </button>
                
              </form>
            </div>
          )} */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
