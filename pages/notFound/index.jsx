import React from 'react'
import styles from "./notFound.module.css"
import { Header, Navbar, Footer } from '../../components'

export default function NotFound() {
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
