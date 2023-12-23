import axios from "axios";

const API_URL = 'http://localhost:3001';

interface LoginData {
  email?: string;
  password?: string;
}

export interface RegisterData {
  email?: string;
  password?: string;
  lastName?: string;
  firstName?: string;
  confirmPassword?: string;
}

const login = async (loginData: LoginData) => {
    try {
        const res = await axios.post(`${API_URL}/external/login`, loginData);
        localStorage.setItem('token', res.data.token);
        return res.data; 
    } catch (err) {
        throw err;
    }
};

const register = async (userData: RegisterData) => {
  try {
      const res = await axios.post(`${API_URL}/external/signup`, userData);
      return res.data;
  } catch (err) {
      throw err;
  }
};

export default {
  login,
  register
};