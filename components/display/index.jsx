import React from 'react'
import styles from "./display.module.css"

export default function Display() {
   const data = [
    {"number": "546+", "title": "Registered Riders"},
    {"number": "789,000+", "title": "Orders Delivered"},
    {"number": "690+", "title": "Restourant Partnered"},
    {"number": "17,457+", "title": "Food items"},
    ]
  return (
    <div className={styles.container}>
      {
        data.map((item, index)=>(
            <div className={styles.card} key={index}>
                <p className={styles.number}>{item.number}</p>
                <p className={styles.title}>{item.title}</p>
            </div>
        ))
      }
    </div>
  )
}
