import React from 'react'
import styles from "./cart.module.css"
import { basket, cart, remove, gArrow, dArrow, pickup, scooter, fArrow } from '../../src/assets'
import { decreaseProductCount } from '../../services/cart'
import {useNavigate} from "react-router-dom";


export default function Cart({items, price, setUpdate}) {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img className={styles.share} src={cart} alt="" />
      </div>
      <div className={styles.basket}>
        <div className={styles.heading}>
          <img className={styles.logo} src={basket} alt="" />
          <p>My Basket</p>
        </div>
        <div className={styles.cardContainer}>
          {
            items.map((item, index)=> (
              <div className={styles.card} key={index}>
                <span className={styles.quantity} >{item.quantity}x</span>
                <div className={styles.mid}>
                  <p className={styles.price} >₹ {item.price}</p>
                  <p className={styles.name} >{item.productName}</p>
                </div>
                <img className={styles.remove} src={remove} onClick={()=> {decreaseProductCount(userId, item.productId); setUpdate(false)}} alt="" />
              </div>
            ))
          }
        </div>
        <div className={styles.cal}>
          <p className={styles.line}><span className={styles.cost} >SubTotal:</span>  <span className={styles.val}>₹{price}.00</span></p>
          <p className={styles.line}><span className={styles.cost}>Discounts:</span>  <span className={styles.val}>- ₹40.00</span></p>
          <p className={styles.line}><span className={styles.cost}>Delivery Fee:</span>  <span className={styles.val}>₹40.00</span></p>
        </div>
        <div className={styles.box}>
          <p className={styles.total}> <span className={styles.title} >Total to pay</span> <span className={styles.value} >₹{price}.00</span> </p>
          <p className={styles.coupon}> <span >Choose your free item..</span> <img src={dArrow} alt="" /> </p>
          <p  className={styles.coupon}> <span>Apply Coupon Code here</span> <img src={gArrow} alt="" /> </p>
        </div>

        <div className={styles.bottom}>
          <div className={styles.con2}>
            <div className={styles.delivery}>
              <img src={scooter} alt="" />
              <p>Delivery</p>
              <span>Starts at 10:50</span>
            </div>
            <div className={styles.collect}>
              <img src={pickup} alt="" />
              <p>Collection</p>
              <span>Starts at 10:00</span>
            </div>
          </div>
          <div  className={`${styles.checkout} ${price > 200 ? styles.active : ""}`} onClick={price > 200 ? () => navigate("/checkout") : undefined}>
            <img src={fArrow} alt="" />
            <span>Checkout!</span>
          </div>
      </div>
      
      </div>
      
      

    </div>
  )
}
