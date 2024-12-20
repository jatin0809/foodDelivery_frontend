import React, {createContext, useEffect, useState} from "react";
import { fetchCartByUserId } from "../services/cart";
import { getImages } from "../services/images";
import { getReviews } from "../services/reviews";
import { getUser } from "../services/auth";
import { fetchAddressByUserId } from "../services/address";

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
    const [userName, setUserName] = useState("");
    const [isAddress, setIsAddress] = useState(false);
    const [isCart, setIsCart] = useState(false)
    const [address, setAddress] = useState([]);
    const [defaultAddress, setDefaultAddress] = useState([]);
    const [updateAdd, setUpdateAdd] = useState(true)


    const fetchAddress = async () =>{
        const addressData = await fetchAddressByUserId(userId);
        const defAddress = await addressData.address.addresses.find((address) => address.isDefault);
        const addres = await addressData.address.addresses
        setAddress(addres)
        setDefaultAddress(defAddress)
        
    }
    // console.log(address);

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

    const fetchData = async ()=>{
        const res = await getImages()
        const rev = await getReviews()
        setTestimonialData(rev)
        setData(res);
      }
    const fetchUser = async ()=> {
        const detail = await getUser(userId)
        setUser(detail)
        setUserName(detail.name)
    }


      useEffect(()=> {
        fetchData();
        if(userId){
            fetchUser();
        }
      },[]);
      

    useEffect(()=> {
        if(isCart){
            fetchCart()
            setUpdate(true)
        }
    },[update]);
    
    useEffect(()=>{
        if(isAddress){
            fetchAddress()
            setUpdateAdd(true)
        }
    }, [updateAdd])



    const values = {
        update, setUpdate, cartData, showCart, data, testimonialData, loadingCart, user, userName, address, defaultAddress,
         setUpdateAdd, setIsAddress, setIsCart
    };
    
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
};

