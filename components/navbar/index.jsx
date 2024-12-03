import React from 'react'
import styles from "./navbar.module.css"
import { logo } from '../../src/assets'
import { FaUserCircle } from "react-icons/fa";
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import {useNavigate} from "react-router-dom";

export default function Navbar() {
  const {userName} = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
    <img src={logo} alt="" />
    <ul>
      <li className={styles.active}> Home </li>
      <li>Browse Menu</li>
      <li>Special Offers</li>
      <li>Restourants</li>
      <li>Track Order</li>
      <li onClick={() => navigate(userName ? "/profile" : "/login")} className={styles.user}> <span><FaUserCircle /></span> <p> {userName ? userName : "Login/signup" }</p></li>
    </ul>
    </div>
  )
}
