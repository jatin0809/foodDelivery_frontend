import React from 'react'
import styles from "./bannertwo.module.css"
import {logo, store} from "../../src/assets/index";

export default function Bannertwo() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img src={logo} alt="" />
        <h1>ing is more</h1>
      </div>
      <div className={styles.subHeading}>
        <p> <span>Personalised</span> & Instant</p>
      </div>
      <p className={styles.desc}>Download the Order.uk app for faster ordering</p>
      <img className={styles.store} src={store} alt="" />
      <img className={styles.shadow} src="https://res.cloudinary.com/dlu2nu7py/image/upload/v1732701376/friends-laughing-using-mobiles_1_fzp9ht.png" alt="" />
      <img className={styles.left} src="https://res.cloudinary.com/dlu2nu7py/image/upload/v1732701185/friends-laughing-using-mobiles_2_e5pvxe.png" alt="" />

    </div>
  )
}
