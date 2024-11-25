import React from 'react'
import styles from "./home.module.css";
import { Footer, Header, Navbar, Banner } from '../../components';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Header />
        <Navbar />
        <Banner />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
