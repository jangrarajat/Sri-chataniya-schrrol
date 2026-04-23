// src/api/api.js
import axios from 'axios';

const API_URL =  'https://sri-chataniya-schrrol-server.onrender.com/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ============= ADMISSION FORM API =============
export const submitAdmissionForm = async (formData) => {
  try {
    const response = await api.post('/admin-forms', formData);
    return response.data;
  } catch (error) {
    console.error('Admission form submission error:', error);
    throw error.response?.data || error.message;
  }
};

// ============= CONTACT FORM API =============
export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/contacts', formData);
    return response.data;
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error.response?.data || error.message;
  }
};

// ============= GALLERY API =============
export const getAllImages = async (category = null) => {
  try {
    const url = category ? `/images?category=${encodeURIComponent(category)}` : '/images';
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Get images error:', error);
    throw error.response?.data || error.message;
  }
};

export const getImageById = async (id) => {
  try {
    const response = await api.get(`/images/${id}`);
    return response.data;
  } catch (error) {
    console.error('Get image by ID error:', error);
    throw error.response?.data || error.message;
  }
};

export default api;