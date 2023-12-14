import axios from "axios";

const API_URL = 'http://localhost:3000/api';

interface LoginData {
  email: string;
  password: string;
}

const login = async (loginData: LoginData) => {
  try {
    const res = await axios.post(`${API_URL}/user/login`, loginData);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export default {
  login
};