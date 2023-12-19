import axios from "axios";

const API_URL = 'http://localhost:3001';

const getTheses = async () => {
    try {
        const res = await axios.get(`${API_URL}/thesis`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

const getThesisById = async (thesisId: string) => {
    try {
        const res = await axios.get(`${API_URL}/thesis/${thesisId}`);
        return res.data;
    } catch (err) {
        throw err;
    }
};

const getFilesByThesisId = async (thesisId: string) => {
  try {
    const res = await axios.get(`${API_URL}/thesis/files/${thesisId}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

const getFileById = async (fileId: string) => {
  try {
    const res = await axios.get(`${API_URL}/thesis/file/${fileId}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

const getCompletedTheses = async () => {
  try {
    const res = await axios.get(`${API_URL}/thesis/completed`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

const getCompletedThesisFile = async (assignedThesisId: string) => {
  try {
    const res = await axios.get(`${API_URL}/thesis/completed/file/${assignedThesisId}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

const getCompletedThesisDataFile = async (fileId: string) => {
  try {
    const res = await axios.get(`${API_URL}/thesis/completed/data/${fileId}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

const getProfessors = async () => {
  try {
    const res = await axios.get(`${API_URL}/thesis/professors`);
    return res.data;
  } catch (err) {
    throw err;
  }
};


export default {
    getTheses,
    getThesisById,
    getFilesByThesisId,
    getFileById,
    getCompletedTheses,
    getCompletedThesisFile,
    getCompletedThesisDataFile,
    getProfessors
};
