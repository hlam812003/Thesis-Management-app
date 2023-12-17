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

const deleteExternal = async (id: string) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${API_URL}/admin/delete_external/${id}`,{
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
    return response.data; // Assuming the server sends a response with a message property
  } catch (error) {
    throw error;
  }
};

const getAllExternal_notActive = async (page = 1) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/admin/get_not_active_externals?page=${page}`,{
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
    return response.data; // Assuming the server sends a response with a message property
  } catch (error) {
    throw error;
  }
};

const activeExternal = async (id: string) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${API_URL}/admin/activate_external/${id}`,{
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
    return response.data; // Assuming the server sends a response with a message property
  } catch (error) {
    throw error;
  }
};

const updateExternal = async (id: string) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${API_URL}/admin/update_external/${id}`,{
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
    return response.data; // Assuming the server sends a response with a message property
  } catch (error) {
    throw error;
  }
};


export default {
    createExternal,
    getAllExternals,
    deleteExternal,
    getAllExternal_notActive,
    activeExternal,
    updateExternal,
};