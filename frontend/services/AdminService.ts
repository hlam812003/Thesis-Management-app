import axios from "axios";

const API_URL = 'http://localhost:3001';

export interface ExternalData {
  email: string;
  password: string;
  name: string;
  lastname: string;
  role?: string;
  active?: boolean;
  _id?: string;
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
    const response = await axios.get(`${API_URL}/admin/activate_external/${id}`,{
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
    return response.data; // Assuming the server sends a response with a message property
  } catch (error) {
    throw error;
  }
};

const updateExternal = async (id: string, role:string) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${API_URL}/admin/update_external/${id}`,{ role },{
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
    return response.data; // Assuming the server sends a response with a message property
  } catch (error) {
    throw error;
  }
};

const Test = async () => {
  try {
    
    const response = await axios.get(`${API_URL}/thesis/658041bc74ad9d2de4f633e7`,{
      headers: {
          
      },
  });
    return response.data; // Assuming the server sends a response with a message property
  } catch (error) {
    throw error;
  }
};

export interface UserData {
  email: string;
  name: string;
  lastname: string;
  role?: string;
  _id?: string;
}

const getAllUsers = async (page = 1) => {  
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/admin/get_users?page=${page}`,{
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
    return response.data; // Assuming the server sends a response with a message property
  } catch (error) {
    throw error;
  }

};

const getUserbyId = async (id: string) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/admin/get_user/${id}`,{
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
    return response.data; // Assuming the server sends a response with a message property
  } catch (error) {
    throw error;
  }

};

const deleteUserbyID = async (id: string) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${API_URL}/admin/delete_user/${id}`,{
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
    return response.data; // Assuming the server sends a response with a message property
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id: string, role:string) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${API_URL}/admin/update_user/${id}`,{ role },{
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
    return response.data; // Assuming the server sends a response with a message property
  } catch (error) {
    throw error;
  }

};

export interface ApplicationPeriodData  {
  application_period_start: Date ;
  application_period_end: Date;
};

const applicationPeriod = async (applicationPeriodData: ApplicationPeriodData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/admin/application_period`,{
      application_period_start: applicationPeriodData.application_period_start,
      application_period_end: applicationPeriodData.application_period_end,
    },{
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
    return response.data; // Assuming the server sends a response with a message property
  } catch (error) {
    throw error;
  }
};

const creatUniversity = async (universityName: String) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/admin/create_university`,universityName,{
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
    return response.data; // Assuming the server sends a response with a message property
  } catch (error) {
    throw error;
  }
};

const deleteUniversity = async (id: string) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${API_URL}/admin/delete_university/${id}`,{
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
    getAllUsers,
    getUserbyId,
    deleteUserbyID,
    updateUser,
    applicationPeriod,
    creatUniversity,
    deleteUniversity,
    Test,
};