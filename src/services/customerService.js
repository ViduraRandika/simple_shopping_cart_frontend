import axios from "axios";
axios.defaults.withCredentials = true;

const API_URL = "http://localhost:8000/customer/";
const viewProfile = async ()=>{
    return await axios.get(API_URL+"view-profile");
}

const updateProfile = async (data) => {
    const res = await axios.post(API_URL+"update-profile", data);
    return res.data;
}

const addProductToCart = async (data) => {
  const res = await axios.post(API_URL + "add-item-to-cart", data);
  return res;
};

const getCartItems = async () => {
  const res = await axios.get(API_URL + "get-shopping-cart-items");
    return res.data;
};

const CustomerService = {
  viewProfile,
  updateProfile,
  addProductToCart,
  getCartItems,
};

export default CustomerService;
