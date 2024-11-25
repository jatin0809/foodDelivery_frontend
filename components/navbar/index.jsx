import React from 'react'
import styles from "./navbar.module.css"
import { logo } from '../../src/assets'
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className={styles.container}>
    <img src={logo} alt="" />
    <ul>
      <li className={styles.active}> Home </li>
      <li>Browse Menu</li>
      <li>Special Offers</li>
      <li>Restourants</li>
      <li>Track Order</li>
      <li className={styles.user}> <span><FaUserCircle /></span> <p> Login/Signup</p></li>
    </ul>
    </div>
  )
}
