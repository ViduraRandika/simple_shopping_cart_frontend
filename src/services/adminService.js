import axios from "axios";

axios.defaults.withCredentials = true;
const API_URL = "http://localhost:8000/admin/";

const addProduct = async (data) => {
    const res = await axios.post(API_URL + "add-product", data);
    if (res.data.errors) {
        return false;
    } else {
        return true;
    }
}

const AdminService = {
    addProduct
}

export default AdminService;
