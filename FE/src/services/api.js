import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

// Employee APIs
export const employeeAPI = {
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/employees`);
    return response.json();
  },
  create: async (data) => {
    const response = await fetch(`${BASE_URL}/employees`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  update: async (id, data) => {
    const response = await fetch(`${BASE_URL}/employees/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  delete: async (id) => {
    const response = await fetch(`${BASE_URL}/employees/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },
};

// Product APIs
export const productAPI = {
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/products`);
    return response.json();
  },
  create: async (data) => {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  update: async (id, data) => {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  delete: async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },
};

// Category APIs
export const categoryAPI = {
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/categories`);
    return response.json();
  },
  create: async (data) => {
    const response = await fetch(`${BASE_URL}/categories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  update: async (id, data) => {
    const response = await fetch(`${BASE_URL}/categories/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  delete: async (id) => {
    const response = await fetch(`${BASE_URL}/categories/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },
};
