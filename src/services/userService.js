import axios from "axios";

axios.defaults.withCredentials = true;
const API_URL = "http://localhost:8000/user/";

const getProducts = async (data) => {
  const response = await axios.get(API_URL + 'view-product/'+data);
  if (response.status === 200) {
    return response.data;
  } else {
    return false;
  }
};

const UserService = {
  getProducts
};

export default UserService;

