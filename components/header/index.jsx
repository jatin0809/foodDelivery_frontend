import React from 'react'
import styles from "./header.module.css"
import { arrow, basket, location, star } from '../../src/assets'


export default function Header() {
  return (
    <div className={styles.container}>
            <div className={styles.side}>
            <img src={star} alt="" />
            <p>   Get 5% off on your first order, <span>Promo: ORDER5</span></p>
            </div>

            <div className={styles.side}>
            <img src={location} alt="" />
            <p>  Regent Street, A4, A4201, London <span> Change Location</span></p>
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
