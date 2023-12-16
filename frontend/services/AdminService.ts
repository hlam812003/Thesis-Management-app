import axios from "axios";

const API_URL = 'http://localhost:3001';

interface ExternalData {
    email: string;
    password: string;
    name: string;
    lastname: string;

}

const createExternal = async (externalData: ExternalData) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.post(`${API_URL}/admin/create_external`,externalData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }); 
    localStorage.setItem('message', res.data.message);
    return res.data;
  } catch (err) {
    throw err;
  }
};

const getAllExternals = async (page = 1) => {
    try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${API_URL}/admin/get_externals?page=${page}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;

    } catch (err) {
        throw err;
    }
}


export default {
    createExternal,
    getAllExternals,
};