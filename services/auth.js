import axios from "axios";
import { addTokenToHeader } from "../helper/addToken";

export const register = async (data) => {
    const res = axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/register`, data, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    });
    return res;
}

export const login = async (data) => {
    const res = axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/user/login`, data, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    });
    return res;
}

export const getUser = async (id) => {
    const res = axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/user/${id}`);
    return (await res).data;
}


export const updateUser = async (data, id) => {
    try {
      // Get headers with token
      const headers = addTokenToHeader({ headers: {} });
      
      // Make the PUT request to the backend API
      const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/v1/user/${id}`, data, {
        headers,
      });
  
      // Log and return the response if successful
      console.log('User updated successfully:', response.data);
      return response.data;
    } catch (error) {
      // Log the error if the request fails
      console.error('Error updating user:', error.response ? error.response.data : error.message);
      throw error; // Re-throw the error for further handling in UI
    }
  };