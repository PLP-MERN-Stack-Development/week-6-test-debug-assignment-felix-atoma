import apiClient from './apiClient';

export const loginUser = async (email, password) => {
  try {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || 'Login failed');
  }
};

export const logoutUser = async () => {
  try {
    await apiClient.post('/auth/logout');
  } catch (error) {
    console.error('Logout failed:', error?.response?.data?.message || error.message);
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || 'Registration failed');
  }
};

export const fetchCurrentUser = async () => {
  try {
    const response = await apiClient.get('/auth/profile');
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || 'Failed to fetch user');
  }
};