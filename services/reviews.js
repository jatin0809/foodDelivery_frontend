import axios from "axios";

export const getReviews = async () =>{
    try {
        const res = axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/reviews`);
        const data = (await res).data.reviews;
        return data;
    } 
    catch (error) {
        console.error("Error fetching reviews:", error);
    }
}