import React from 'react'
import styles from "./bannerthree.module.css"
import { bike, completed } from '../../src/assets'

export default function Bannerthree() {
  return (
    <div className={styles.container}>
      <img className={styles.back} src="https://res.cloudinary.com/dlu2nu7py/image/upload/v1732714583/Group_23_ghnj3h.png" alt="" />
      <img className={styles.front} src="https://res.cloudinary.com/dlu2nu7py/image/upload/v1732714583/Rectangle_44_dodgsg.png" alt="" />
      <img className={styles.rating} src="https://res.cloudinary.com/dlu2nu7py/image/upload/v1732714582/Rectangle_64_khym8u.png" alt="" />
      <p className={styles.title}>I'm lovin' it!</p>
      <p className={styles.name}>McDonald's East Delhi</p>
      <div className={styles.bar}>
        <p><img src={completed} alt="" /> Minimum Order: 99 INR</p>
        <p><img src={bike} alt="" /> <span className={styles.detail}>Delivery in 20-25 Minutes</span></p>
      </div>
      <p className={styles.time}>🕛 Open until 3:00 AM</p>
    </div>
  )
}
