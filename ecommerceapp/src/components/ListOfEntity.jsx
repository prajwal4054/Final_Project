import axios from "axios";
import { startTransition, useEffect, useState } from "react";
import { getAllCategories, getAllProducts } from "./Service";

export function ListProduct() {
  const[prods,setprods]=useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    getProducts();
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
      //console.log(response.data[0].categoryList[0].name);
      // const sortedProducts = response.data.sort(
      //   (a, b) => a.productId - b.productId
      // );

      setprods(response.data);
      console.log(response.data)
      
    } catch (error) {
      console.error("Error fetching products:", error);
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
      <table className="table table-striped table-hover table-sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            {/* <th>Category</th> */}
          </tr>
        </thead>
        <tbody>
          {prods.map((item,index) => (
            <tr key={index}>
              <td>{item.productId}</td>
              <td>{item.productName}</td>
              <td>{item.productPrice} </td>
              <td>{item.productDescription}</td>
              {/* <td>{item.categoryList[0].name}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ListCategory() {
  const [category, setcategory] = useState([]);

  const token = localStorage.getItem("token");
  useEffect(() => {
    getCategories();
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
      const sortedCategories = response.data.sort(
        (a, b) => a.categoryId - b.categoryId
      );

      setcategory(sortedCategories);
      // console.log(productData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div
      className="container"
      style={{
        marginTop: "100px",
        marginLeft: "300px",
        border: "solid",
        width: "50vw",
      }}
    >
      <table className="table table-striped table-hover table-sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item) => (
            <tr key={item.categoryId}>
              <td>{item.categoryId}</td>
              <td>{item.name}</td>
              <td>{item.categoryDescription}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
