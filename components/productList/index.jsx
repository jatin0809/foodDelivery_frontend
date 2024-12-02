import React, { useEffect, useState, useContext } from 'react'
import styles from "./productlist.module.css"
import Discount from '../discount'
import Card from '../Card'
import { getProducts} from '../../services/product'
import Cart from '../cart'
import {AppContext} from "../../context/AppContext";

export default function ProductList({discount =[]}) {

    const Data = {   burger: [],  fries: [],  drinks: [] };
    const { setUpdate, cartData, showCart } = useContext(AppContext);

    const [burger, setBurger] = useState([]);
    const [fries, setFries] = useState([]);
    const [drinks, setDrinks] = useState([]);
    


    const divide = (data)=> {
        data.forEach(item => {
            if (item.category in Data) {
              Data[item.category].push(item);
            } else {
              console.warn(`Unknown category: ${item.category}`);
            }
          });
    }


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
          <div className={styles.left} style={{width: showCart? "68%" : "100%"}} >
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
          <div className={styles.right} style={{width: showCart? "24%" : "0%"}}>
            {showCart? (<Cart items={cartData.items}  price={cartData.totalPrice} setUpdate={setUpdate} />) : (null) } 
          </div>
      
    </div>
  )
}
