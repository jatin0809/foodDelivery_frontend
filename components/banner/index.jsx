import React from 'react'
import styles from "./banner.module.css"

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.yellowBack}> </div>
      <img src="https://res.cloudinary.com/dlu2nu7py/image/upload/v1732525182/back-girl_dydgvd.png" alt="" className={styles.backImage} />
      <img src="https://res.cloudinary.com/dlu2nu7py/image/upload/v1732525182/pizza-girl_hhot0n.png" alt="" className={styles.girl} />
      <img src="https://res.cloudinary.com/dlu2nu7py/image/upload/v1732540069/three_pdg5nt.png" alt="" className={styles.third} />
      <img src="https://res.cloudinary.com/dlu2nu7py/image/upload/v1732539870/two_gquaox.png" alt="" className={styles.second} />
      <img src="https://res.cloudinary.com/dlu2nu7py/image/upload/v1732539870/one_c3vlar.png" alt="" className={styles.first} />
        <div className={styles.messageOne}>
          <p className={styles.heading}>We've Received your order!</p>
          <p className={styles.desc}>Awaiting Restourant acceptance</p>
        </div>

        <div className={styles.messageTwo}>
          <p className={styles.heading}>Order Accepted!  &nbsp; &nbsp; &nbsp;✅</p>
          <p className={styles.desc}>Your order will be delivered shortly</p>
        </div>

        <div className={styles.messageThree}>
          <p className={styles.heading}>Your rider's nearby 🎉 </p>
          <p className={styles.desc}>They're almost there - get ready!</p>
        </div>
      <div className={styles.left}>
        <p className={styles.intro}>Order Restourant food, takeaway and groceries.</p>
        <div className={styles.one}>Feast Your Senses,</div>
        <div className={styles.two} >Fast and Fresh</div>
        <span className={styles.para}>Enter a postcode to see what we deliver</span>
        <div className={styles.inputContainer}>
            <input type="text" placeholder="e.g. EC4R 3TE" />
            <button>Search</button>
            </div>
      </div>
    </div>
  )
}
