import axios from "axios";

export const getImages = async () =>{
    try {
        const res = axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/images`);
        const data = (await res).data;
        return data;
    } 
    catch (error) {
        console.error("Error fetching images:", error);
    }
}

