import React from 'react'
import styles from "./success.module.css"
import { Header, Navbar, Footer } from '../../components'
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import {done} from "../../src/assets";
import { useNavigate } from "react-router-dom";


export default function Successful() {
  const {cartData} = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Header />
        <Navbar />
        <div className={styles.mainContainer}>
          <img className={styles.logo} src={done} alt="" />
          <p className={styles.heading}>Order Placed Successfully</p>
          <p className={styles.des}>The order is confirmed and on its way. Get set <br /> to savor you choosen delights!</p>
          <div className={styles.data}> 
            {
              cartData.items.map((item, index)=>(
                <p key={index}>{item.productName}</p>
              ))
            }
            <p onClick={()=> navigate("/home")} className={styles.button}>Back to Home</p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
