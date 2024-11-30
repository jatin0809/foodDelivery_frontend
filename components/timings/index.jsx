import React from 'react'
import styles from "./timing.module.css"
import { clock, verified, tracking } from '../../src/assets'

export default function Timings({data =[]}) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.header}>
            <img src={tracking} alt="" />
            <p className={styles.title}>  Delivery Information</p>
        </div>
        <ul className={styles.list}>
            {
                data.map((item, index)=>(
                    <li key={index}> <span>{item.day}</span>:{item.delivery}</li>
                ))
            }
            <p ><span>Estimated time until delivery:</span>20 min</p>
        </ul>
        
      </div>

      <div className={styles.mid}>
        <div className={styles.header} >
            <img src={verified} alt="" />
            <p className={styles.title}>Contact Information</p>
        </div>
        <div className={styles.list}>
            <p className={styles.para}>If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.</p>
            <span>Phone number</span>
            <p className={styles.val}>+91 9874561230</p>
            <span>Wesbite</span>
            <p className={styles.val} >https://mcdonalds.in</p>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.header}>
            <img src={clock} alt="" />
            <p className={styles.title}> Operational Times</p>
        </div>
        <ul className={styles.list}>
            {
                data.map((item, index)=>(
                    <li key={index}> <span>{item.day}</span>:{item.operational}</li>
                ))
            }
        </ul>
      </div>
    </div>
  )
}
