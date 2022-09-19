import axios from "axios";

axios.defaults.withCredentials = true;
const API_URL = "http://localhost:8000/";

const register = (data) => {
  const response = axios.post(API_URL + "register", data);
  return response;
};

const saveProfilePicture = (data) => {
  const res = axios.post(API_URL + "upload-profile-pic", data, {
    "content-type": "multipart/form-data",
  });
  return res;
};

const login = async (data) => {
  const response = await axios.post(API_URL + "login", data);
  if (response.data.status === 200) {
    return response.data;
  } else {
    return false;
  }
};

const logout = () => {};

const navigate = async () => {
  return isAdmin ? true : false;
};

const isAdmin = async () => {
  const res = await axios.post(API_URL + "is-admin");
  if (res.data.status === 401) {
    return false;
  } else {
    return true;
  }
};

const isCustomer = async () => {
  const res = await axios.post(API_URL + "is-customer");
  if (res.data.status === 401) {
    return false;
  } else {
    return true;
  }
};

const isGuest = async () => {
  const res = await axios.post(API_URL + "is-guest");
  if (res.data.status === 401) {
    return false;
  } else if (res.data.customer === true) {
    return { customer: true };
  } else if (res.data.admin === true) {
    return { admin: true };
  } else {
    return { guest: true };
  }
};

const AuthService = {
  register,
  login,
  logout,
  navigate,
  isAdmin,
  isCustomer,
  isGuest,
  saveProfilePicture,
};

export default AuthService;
