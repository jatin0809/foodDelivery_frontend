import React from 'react'
import styles from "./home.module.css";
import { Footer } from '../../components';
import { FaLocationDot } from "react-icons/fa6";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.header}>
          <p>🌟  Get 5% off on your first order, <span>Promo: ORDER5</span></p>
          <p><FaLocationDot /> Regent Street, A4, A4201, London <span>Change Location</span></p>
          <div className={styles.box}>

          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
