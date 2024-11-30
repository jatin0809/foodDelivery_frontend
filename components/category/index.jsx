import React from 'react'
import styles from "./category.module.css";

export default function Category({data =[]}) {
  return (
    <div className={styles.container}>
      <p>Order.uk Popular Categories <span>🤩</span></p>
      <div className={styles.category}>
        {
          data.map((item, index)=> (
            <div className={styles.card} key={index}>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <span>{item.total} Restourants</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
