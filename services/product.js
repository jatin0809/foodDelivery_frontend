import axios from "axios";

export const getProducts = async () =>{
    try {
        const res = axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/products`);
        const data = (await res).data.products;
        return data;
    } 
    catch (error) {
        console.error("Error in fetching products:", error);
    }
}
// get by category
 export const getProductsByCategory = async (category)=> {
    try{
        const res = axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/products/${category}`);
        const data = (await res).data;
        return data;
    }
    catch(error){
        console.log("Error in fetching products:", error)
    }
 }

// get by id
export const getProductsById = async (id)=> {
    try{
        const res = axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/products/search/${id}`);
        const data = (await res).data;
        return data;
    }
    catch(error){
        console.log("Error in fetching product:", error)
    }
 }
