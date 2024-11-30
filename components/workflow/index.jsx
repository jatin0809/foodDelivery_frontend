import React from 'react'
import styles from "./workflow.module.css"

export default function Workflow({data =[]}) {
  return (
    <div className={styles.container}>
      <div className={styles.space}></div>
      <div className={styles.top}>
        <p>Know more about us!</p>
        <ul>
          <li className={styles.active}>Frequent Questions</li>
          <li>Who we are?</li>
          <li>Partner Program</li>
          <li>Help & Support</li>
        </ul>
      </div>

      <div className={styles.box}>
        <div className={styles.left}>
        <p className={styles.selected}>How does Order.uk work?</p>
          <ul>
            <li>What payment methods are accepted?</li>
            <li>Can i track my order in real-time?</li>
            <li>Are there any special discounts or promotions available?</li>
            <li>Is Order.uk is available in my area?</li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.steps}>
            {
              data.map((item, index)=> (
                <div className={styles.card} key={index}>
                  <p className={styles.name}>{item.name}</p>
                  <img src={item.image} alt="" />
                  <p className={styles.description}>{item.description}</p>
                </div>
              ))
            }
          </div>
          <p className={styles.footer}>Order.UK simplifies the food ordering process. Browse through our diverse menu,
              select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
        </div>
      </div>
    </div>
  )
}
