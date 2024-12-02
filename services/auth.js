import axios from "axios";

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

