import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Spinner from "./Spinner";

var url;

const UserProduct = ({cart,setCart}) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const token = localStorage.getItem("token");
  const addToCart = (id,title,price,description,imgSrc,amount=1) =>{
    
    console.log(imgSrc)
    const obj = {
      id,title,price,description,imgSrc,amount
    }
    setCart([...cart, obj]);
    console.log("Cart element = ",cart)
    toast.success("Product added to cart!");
}

  useEffect(() => {
    setLoading(true);
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
      console.log(response.data);
      setProductData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  return loading ? (
    <Spinner />
  ) : (
    // <div
    //   style={{ backgroundColor: "white", height: "100vh", marginRight: "20px" }}
    // >
    //   <div className="justify-content-center row rw">
    //     {productData.map((p) => {
    //       p.url = `https://source.unsplash.com/featured/?${encodeURIComponent(
    //         p.productName
    //       )}`;
    //       return (
    //         <div
    //           class="card cd"
    //           style={{
    //             backgroundColor: "black",
    //             height: "62vh",
    //             color: "white",
    //           }}
    //         >
    //           <div class="card-body">
    //             <div className="category-card-img  ">
    //               <img
    //                 src={p.url}
    //                 className="img-fluid"
    //                 alt="phone"
    //                 style={{ height: "200px", width: "100vw" }}
    //               />
    //             </div>
    //             <h5 class="card-title">{p.productName}</h5>
    //             <h6 class="card-subtitle mb-2">
    //               Price: &#8377;{p.productPrice}
    //             </h6>
    //             <p class="card-text">Description: {p.productDescription}</p>
    //             <button
    //               onClick={() =>
    //                 addToCart(
    //                   p.productId,
    //                   p.productName,
    //                   p.productPrice,
    //                   p.productDescription,
    //                   p.url
    //                 )
    //               }
    //               className="btn btn-secondary"
    //               style={{ fontSize: "12px", padding: "4px 8px" }}
    //             >
    //               Add to Cart
    //             </button>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
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

export default UserProduct;
