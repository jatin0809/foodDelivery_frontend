import React, {createContext, useEffect, useState} from "react";
import { fetchCartByUserId } from "../services/cart";
import { getImages } from "../services/images";
import { getReviews } from "../services/reviews";
import { getUser } from "../services/auth";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const userId = localStorage.getItem("userId")
    const [update, setUpdate] = useState(true);
    const [cartData, setCartData] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [data, setData] = useState([]);
    const [testimonialData, setTestimonialData] = useState([]);
    const [loadingCart, setLoadingCart] = useState(false);
    const [user, setUser] = useState([]);




    const fetchCart = async () =>{
        setLoadingCart(true);
        try {
            const cartData = await fetchCartByUserId(userId)
            setCartData(cartData.cart)
            setShowCart(cartData.success)
        } catch (error) {
            console.error("Error fetching cart data:", error);
        } finally{
            setLoadingCart(false);
        }
    }
    console.log(user)

    const fetchData = async ()=>{
        const res = await getImages()
        const rev = await getReviews()
        const detail = await getUser(userId)
        setTestimonialData(rev)
        setData(res);
        setUser(detail)
      }

      useEffect(()=> {
        fetchData();
      },[]);

    useEffect(()=> {
        fetchCart()
        setUpdate(true)
    },[update]);



    const values = {
        update, setUpdate, cartData, showCart, data, testimonialData, loadingCart, user
    };
    
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
};

