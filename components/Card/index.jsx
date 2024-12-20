import React from 'react'
import styles from "./card.module.css"
import { plus } from '../../src/assets'
import { addToCart } from '../../services/cart'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function Card({data =[], setUpdate}) {
  const userId = localStorage.getItem("userId");
  const {setIsCart} = useContext(AppContext);

  return (

      <div  className={styles.card}>
            <img className={styles.main} src={data.image} alt="" />
            <div className={styles.space}></div>
            <img onClick={()=> { addToCart(userId, data._id, data.title, data.image, data.price, 1); setIsCart(true); setUpdate(false)}} className={styles.plus} src={plus} alt="" />
            <p className={styles.title}>{data.title}</p>
            <p className={styles.description}>{data.description}</p>
            <p className={styles.price}>₹{data.price}</p>
             </div>

  )
}
