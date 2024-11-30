import React, { useEffect, useState } from 'react'
import styles from "./productlist.module.css"
import Discount from '../discount'
import Card from '../Card'
import { getProducts} from '../../services/product'
import {  fetchCartByUserId } from '../../services/cart'
import Cart from '../cart'

export default function ProductList({discount =[]}) {

    const Data = {   burger: [],  fries: [],  drinks: [] };

    const [burger, setBurger] = useState([]);
    const [fries, setFries] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [cartData, setCartData] = useState([])
    const [update, setUpdate] = useState(true);
    const [showCart, setShowCart] = useState(false);
    const userId = localStorage.getItem("userId")


    const divide = (data)=> {
        data.forEach(item => {
            if (item.category in Data) {
              Data[item.category].push(item);
            } else {
              console.warn(`Unknown category: ${item.category}`);
            }
          });
    }

    const fetchCart = async () =>{
        const cartData = await fetchCartByUserId(userId)
        setCartData(cartData.cart)
        setShowCart(cartData.success)
        console.log(cartData.cart.items)
        console.log(cartData.cart.totalPrice)
    }

    useEffect(()=> {
        fetchCart()
        setUpdate(true)
    },[update])

    const fetchData = async ()=>{
        const res = await getProducts()
        divide(res);
        setBurger(Data.burger);
        setFries(Data.fries);
        setDrinks(Data.drinks);
      }

useEffect(()=> {
fetchData();
},[]);

  return (
    <div className={styles.container}>
          <div className={styles.left} >
            <Discount data={discount} />
            <div>
                <div className={styles.section}>
                    <h1>Burgers</h1>
                    <div className={styles.cards}>
                        {
                            burger.map((item, index)=>(
                                <Card key={index} data={item} setUpdate={setUpdate}  />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.section}>
                    <h1 className={styles.heading} >Fries</h1>
                    <div className={styles.cards}>
                        {
                            fries.map((item, index)=>(
                                <Card key={index} data={item}  setUpdate={setUpdate} />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.section}>
                    <h1 className={styles.heading}>Cold Drinks</h1>
                    <div className={styles.cards}>
                        {
                            drinks.map((item, index)=>(
                                <Card key={index} data={item} setUpdate={setUpdate} />
                            ))
                        }
                    </div>
                </div>

            </div>
          </div>
          <div className={styles.right}>
            {showCart? (<Cart items={cartData.items} price={cartData.totalPrice} />) : (null) } 
          </div>
      
    </div>
  )
}
