import React from 'react'
import styles from "./discount.module.css"
import { plus } from '../../src/assets'

export default function Discount({data =[]}) {
  return (
    <div className={styles.container}>
      {
          data.map((item, index)=> (
            <div className={styles.card} key={index}> 
              <img className={styles.main} src={item.image} alt="" />
              <div className={styles.space}></div>
              <img className={styles.button} src={plus} alt="" />
              <div className={styles.intro}>
                <p className={styles.title}>{item.address}</p>
                <p className={styles.name}>{item.name}</p>
                <span>{item.discount}</span>
              </div>
            </div>
          ))
        }
    </div>
  )
}
