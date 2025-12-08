import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/v1.0/products";


export const ProductApi = {
  getProducts: () => axios.get(API_URL),
  searchProduct: (keyword) => axios.get(`${API_URL}/searchproduct/${encodeURIComponent(keyword)}`),
  getProduct: (id) => axios.get(`${API_URL}/${id}`),
  createProduct: (data) => axios.post(API_URL, data),
  updateProduct: (id, data) => axios.put(`${API_URL}/${id}`, data),
  deleteProduct: (id) => axios.delete(`${API_URL}/${id}`),

  
};
