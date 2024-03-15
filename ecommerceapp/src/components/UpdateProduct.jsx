import axios from "axios";
import React, { useState, useEffect, startTransition } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function UpdateProdById() {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);

  const token = localStorage.getItem("token");

  const handleIdSubmit = async (e) => {
    e.preventDefault();
    const id = e.target.elements.productId.value;
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
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      productName: e.target[0].value,
      productPrice: e.target[1].value,
      productDescription: e.target[2].value,
    };
    try {
      const response = await axios.put(
        `http://localhost:8060/productandcategory/ecommerceapp/api/v1/product/updateproduct/${product.productId}`,
        updatedProduct,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      toast.success("Product updated successfully!");
    } catch (error) {
      console.log("Error updating product:", error);
      toast.error("Failed to update product");
    }
  };

  const handleIdChange = (e) => {
    setProductId(e.target.value);
  };

  return (
    <div
      className="container"
      style={{ marginTop: "110px", marginLeft: "250px", width: "50vw" }}
    >
      <h3 className="text-center">Enter product ID to update</h3>
      <form onSubmit={handleIdSubmit} className="mb-4">
        <div className="form-group">
          <label htmlFor="productId">Product ID:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="productId"
            value={productId}
            onChange={handleIdChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Retrieve Product
        </button>
      </form>

      {product && (
        <div className="container">
          <h3 className="text-center">Update Product</h3>
          <form onSubmit={handleUpdateSubmit}>
            {/* Update fields as per your requirement */}
            <div className="form-group">
              <label htmlFor="productName">Product Name:</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                defaultValue={product.productName} // Set default value from retrieved product
              />
              <label htmlFor="productName">Product Price:</label>
              <input
                type="text"
                className="form-control"
                id="productPrice"
                defaultValue={product.productPrice} // Set default value from retrieved product
              />
              <label htmlFor="productName">Product Description:</label>
              <input
                type="text"
                className="form-control"
                id="productDescription"
                defaultValue={product.productDescription} // Set default value from retrieved product
              />
            </div>
            {/* Add more fields as needed */}
            <button type="submit" className="btn btn-primary">
              Update Product
            </button>
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export function UpdateProdByName() {
  const [category, setcategory] = useState([]);

  //fetching all category for dropdown
  // useEffect(() => {
  //   startTransition(() => {
  //     fetchData();
  //   });
  // }, []);

  // const fetchData = () => {
  //   getAllCategories()
  //     .then((response) => {
  //       console.log(response);
  //       setcategory(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [catname, setcatname] = useState({});
  const submithandle = async (e) => {
    e.preventDefault();

    const cname = e.target[4].value;

    try {
      const response = await axios.get(
        `http://localhost:8080/category/categorybyname?name=${cname}`
      );
      console.log("get category");
      console.log(response.data);

      setcatname(response.data);
    } catch (error) {
      console.log("error in fetching category: " + error);
    }
    console.log("category");
    // console.log(catname);
    let data = {
      productId: e.target[0].value,
      productName: e.target[1].value,
      price: e.target[2].value,
      des: e.target[3].value,
      category: {
        categoryId: catname.categoryId,
        categoryName: catname.categoryName,
        des: catname.des,
      },
    };
    console.log(data);
    setFormData(data);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/product/updateproductbyname",
        data
      );
      console.log(res.data);
      setFormData(res.data);
      toast("product updated successfully!");

      // const navigate = useNavigate();
      // navigate('/products')
    } catch (error) {
      console.log("error in adding product: " + error);
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: e.target[0].value,
    };
    setFormData(data);
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/product/productsbyname?name=${e.target[0].value}`,
        data
      );
      console.log(response.data);

      setData(response.data);
      console.log(response.data);
      //   console.log(categoryData[0].productId);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      alert("name not exist");
    }
  };
  //   console.log(data[0].productName);
  return (
    <div
      className="container "
      style={{ marginTop: "110px", marginLeft: "25px", width: "100vw" }}
    >
      <h3 className="text-center">
        {" "}
        Enter product name which you want to update...
      </h3>
      <div className="row  justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handlesubmit}>
            Enter Name:
            <input type="text" className="form-control " />
            <div className="text-center">
              <button className="btn btn-dark mt-2 text-center" type="submit">
                Update
              </button>
            </div>
          </form>
          <div>
            <form onSubmit={submithandle} className="">
              ProductId:{" "}
              <input
                type="text"
                className="form-control "
                value={data.length > 0 ? data[0].productId : ""}
              />{" "}
              <br></br>
              ProductName:{" "}
              <input
                type="text"
                className="form-control "
                value={data.length > 0 ? data[0].productName : ""}
              />{" "}
              <br></br>
              Price: <input type="text" className="form-control " /> <br></br>
              Description: <input type="text" className="form-control " />{" "}
              <br></br>
              CategoryName:
              <select className="form-control">
                {category &&
                  category.map((cat) => (
                    <option key={cat.categoryId} value={cat.categoryName}>
                      {cat.categoryName}
                    </option>
                  ))}
              </select>
              <br></br>
              <button className="btn btn-dark" type="submit">
                Update Product
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
