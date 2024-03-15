// App.js
import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProductList from "./components/ProductList";
import NotFound from "./components/NotFound";
import "./App.css";
import { Navbar } from "./components/Navbar";
import ProductNavbar from "./components/ProductNavbar";
import EcommerceCategory from "./components/EcommerceCategory";
import { ListCategory, ListProduct } from "./components/ListOfEntity";
import { ProductById, ProductByName } from "./components/GetProduct";
import { AddCategory, AddProd } from "./components/Add";
import CategoryNavbar from "./components/CategoryNavbar";
import { UpdateProdById, UpdateProdByName } from "./components/UpdateProduct";
import { DeleteCategory, DeleteProduct } from "./components/Delete";
import UpdateCategoryById, {
  UpdateCategoryByName,
} from "./components/UpdateCategory";
import { CategoryById, CategoryByName } from "./components/GetCategory";
import About from "./components/About";
import FinalNavbar from "./components/FinalNavbar";
import Dashboard from "./components/Dashboard";
import UserProduct from "./components/UserProduct";
import Cart from "./components/Cart";
function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const role = localStorage.getItem("role");
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  const router = createBrowserRouter([
  
      {
        path: "/",
        element: (
          <>
            <FinalNavbar />
            <Dashboard />
          </>
        ),
      },
      {
        path: "/products/user",
        element:
          (
            <>
              <Navbar />
              <UserProduct cart={cart} setCart={setCart} />
            </>
          ) 
      },
      {
        path: "/cart",
        element:
          (
            <>
              <Navbar />
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            </>
          ) 
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/products",
        element: (
          <>
            <ProductNavbar />
            <ProductList />
          </>
        ),
      },
      {
        path: "products/productlist",
        element:
           (
            <>
              <ProductNavbar />
              <ListProduct />
            </>
          ) 
      },
      {
        path: "products/productbyid",
        element:
         (
            <>
              <ProductNavbar />
              <ProductById />
            </>
          ) 
      },
      {
        path: "products/productbyname",
        element:
           (
            <>
              <ProductNavbar />
              <ProductByName />
            </>
          ) 
      },
      {
        path: "/products/addproduct",
        element:
         (
            <>
              <ProductNavbar />
              <AddProd />
            </>
          ) 
      },
      {
        path: "/products/updateproductbyid",
        element:
          (
            <>
              <ProductNavbar />
              <UpdateProdById />
            </>
          ) 
      },
      {
        path: "/products/updateproductbyname",
        element:
           (
            <>
              <ProductNavbar />
              <UpdateProdByName />
            </>
          ) 
      },
      {
        path: "/products/deleteproduct",
        element:
          (
            <>
              <ProductNavbar />
              <DeleteProduct />
            </>
          ) 
      },
      {
        path: "/categories",
        element:
          (
            <>
              <CategoryNavbar />,
              <EcommerceCategory />
            </>
          ) 
      },
      {
        path: "/categories/addcategory",
        element:
           (
            <>
              <CategoryNavbar />
              <AddCategory />
            </>
          ) 
      },
      {
        path: "/categories/categorybyid",
        element:
           (
            <>
              <CategoryNavbar />
              <CategoryById />
            </>
          ) 
      },
      {
        path: "/categories/categorybyname",
        element:
          (
            <>
              <CategoryNavbar />
              <CategoryByName />
            </>
          ) 
      },
      {
        path: "/categories/updatecategorybyid",
        element:
          (
            <>
              <CategoryNavbar />
              <UpdateCategoryById />
            </>
          ) 
      },
      {
        path: "/categories/updatecategorybyname",
        element:
          (
            <>
              <CategoryNavbar />
              <UpdateCategoryByName />
            </>
          ) 
      },
      {
        path: "categories/categorylist",
        element:
           (
            <>
              <CategoryNavbar />
              <ListCategory />
            </>
          ) 
      },
      {
        path: "categories/deletecategory",
        element:
         (
            <>
              <CategoryNavbar />
              <DeleteCategory />
            </>
          ) 
      },

      {
        path: "/about",
        element: (
          <>
            <Navbar />
            <About />
          </>
        ),
      }]
    );
  
  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  );
}

export default App;
