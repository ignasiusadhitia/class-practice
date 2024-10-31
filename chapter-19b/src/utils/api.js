import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = "RJS1-202410";

const getHeaders = (token = null) => {
  return {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const login = async (data) => {
  const res = await axios.post(`${API_URL}/login`, data, {
    headers: getHeaders(),
  });

  return res.data;
};

export const register = async (data) => {
  const res = await axios.post(`${API_URL}/register`, data, {
    headers: getHeaders(),
  });
  return res.data;
};

export const logout = async (token) => {
  const res = await axios.post(
    `${API_URL}/logout`,
    {},
    {
      headers: getHeaders(token),
    }
  );
  return res.data;
};

export const queryAI = async (data, token) => {
  const res = await axios.post(`${API_URL}/query`, data, {
    headers: getHeaders(token),
  });
  return res.data;
};
