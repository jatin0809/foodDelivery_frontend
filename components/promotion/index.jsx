import React from 'react'
import styles from "./promotion.module.css"

export default function Promotion({data =[]}) {
  return (
    <div className={styles.container}>
      {
        data.map((item, index)=> (
            <div className={styles.card} key={index}>
                <img src={item.image} alt="" />
                <p className={styles.title}>{item.title}</p>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.name}>{item.name}</p>
                <button className={styles.button}>Get Started</button>
            </div>
        ))
      }
    </div>
  )
}
