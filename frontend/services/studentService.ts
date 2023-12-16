import axios, { AxiosError } from 'axios';

interface StudentRequest {
    id: number;
}

const API_URL = 'http://localhost:3001';

const getStudentRequests = async (): Promise<StudentRequest[]> => {
    try {
      const response = await axios.get<StudentRequest[]>(`${API_URL}/student/request`);
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        throw axiosError?.response?.data || axiosError.message;
      } else {
        throw err;
      }
    }
};
  
export default {
    getStudentRequests
};