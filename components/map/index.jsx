import React from 'react'
import styles from "./map.module.css"


export default function Map() {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.innerbox}>
            <p className={styles.title}>McDonald's</p>
            <p className={styles.place} >Cannaught Place</p>
            <p className={styles.address} >10, N Block, Connaught Circus, Connaught Place, New Delhi, Delhi 110001</p>
            <p className={styles.heading} >Phone Number</p>
            <p className={styles.value} >+91 9874560123</p>
            <p className={styles.heading} >Website</p>
            <p className={styles.value} >https://mcdonalds.in</p>
            </div>
        </div>
      <div className={styles.map} >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112070.24760715589!2d77.0549248980907!3d28.623910099273093!2m3!1f0!2f0!3f0!
                    3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd49de5c38a9%3A0xaf4652f914ae7c33!2sMcDonald&#39;
                    s!5e0!3m2!1sen!2sin!4v1732774158584!5m2!1sen!2sin" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  )
}
