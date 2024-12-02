import React from 'react'
import styles from "./success.module.css"
import { Header, Navbar, Footer } from '../../components'

export default function Successful() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Header />
        <Navbar />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
