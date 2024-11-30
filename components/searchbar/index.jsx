import React from 'react'
import styles from "./search.module.css"
import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <div className={styles.container} >
      <div className={styles.top}>
        <p>All Offers from McDonald's Cannaught Place</p>
        <div className={styles.searchBox}>
            <span className={styles.icon} ><IoIosSearch /></span>
            <input type="text" placeholder='Search from menu...' className={styles.input} />
        </div>
      </div>
      <div className={styles.navbar}>
        <ul>
            <li className={styles.active}>Offers</li>
            <li>Burger</li>
            <li>Fries</li>
            <li>Cold Drinks</li>
            <li>Happy Meals</li>

        </ul>
      </div>
    </div>
  )
}
