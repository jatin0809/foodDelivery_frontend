import React from 'react'
import styles from "./header.module.css"
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { arrow, basket, location, star } from '../../src/assets'


export default function Header() {
  const {defaultAddress} = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
            <div className={styles.side}>
            <img src={star} alt="" />
            <p>   Get 5% off on your first order, <span>Promo: ORDER5</span></p>
            </div>

            <div className={styles.side}>
            <img src={location} alt="" />
            {
              defaultAddress? <p> {defaultAddress.street}, {defaultAddress.city} <span className={styles.link} onClick={()=>navigate("/address")}> Change Location</span></p> :
              <p> your street, 114 <span className={styles.link} onClick={()=>navigate("/address")}> Add Location</span></p>
            }
            </div>
          <div className={styles.box}>
            <div className={styles.one}>
                <img src={basket} alt="" />
                <p>My Cart</p>
            </div>
            <div className={styles.two}>

            </div>
            <div className={styles.three}>
                <img src={arrow} alt="" />
            </div>
          </div>
        </div>
  )
}
