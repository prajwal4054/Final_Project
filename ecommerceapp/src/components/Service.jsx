import axios from "axios";
export async function addUser(data) {
  try {
    console.log("New User Data recieved in service file");
    console.log(data);
    const response = await axios.post(
      "http://localhost:8060/auth/register",
      data
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
export async function verifyUser(data) {
  try {
    console.log("Exisiting User Data recieved in service file");
    console.log(data);
    const response = await axios.post("http://localhost:8060/auth/login", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

export async function getAllProducts(accessToken) {
  console.log(accessToken);

  const response = await axios.get(
    "http://localhost:8060/productandcategory/ecommerceapp/api/v1/product/getproducts",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  console.log(response);
  return response.data;
}
export function getAllCategories(token) {
  // return axios.get("http://localhost:8080/ecomm/category/categories", config);
  return axios.get("http://localhost:8080/category/categories");
}

export function addNewProduct(data) {
  return axios.post("http://localhost:8080/api/v1/product/addproduct", data);
}
export function addNewCategory(formData) {
  return axios.post("http://localhost:8080/category/addcategory", formData);
}
export function deleteCategoryById(id) {
  return axios.post(`http://localhost:8080/category/deletecategory?id=${id}`);
}
export function getCategoryByName(cname) {
  return axios.get(
    `http://localhost:8080/category/categorybyname?name=${cname}`
  );
}
export function getProductById(id) {
  return axios.get(`http://localhost:8080/api/v1/product/productbyid?id=${id}`);
}
