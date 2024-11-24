import React from 'react'
import styles from "./footer.module.css";
import logo from "../../src/assets/logo-foot.png";
import store from "../../src/assets/store-footer.png";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";


export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.address}>
            <div className={styles.add}>
            <img className={styles.logo} src={logo} alt="" />
            <img className={styles.store} src={store} alt="" />
            <p>Company # 490039-445, Registered with <br /> House of companies</p>
            </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactContainer}>
            <p className={styles.heading}>Get Exclusive Deals in your inbox</p>
            <div className={styles.inputContainer}>
            <input type="text" placeholder="youremail@gmail.com" />
            <button>Subscribe</button>
            </div>
            <p className={styles.p2}>we wont spam, read our <u>email policy</u></p>
            <div className={styles.iconList}>
               <FaFacebook /> <RiInstagramFill />  <AiFillTikTok />  <BsSnapchat />
            </div>
          </div>
        </div>
        <div className={styles.lists}>
          <p className={styles.first}>Legal Pages</p>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Modern Slavery Statement</li>
          </ul>
        </div>
        <div className={styles.lists}>
        <p className={styles.first}>Important Links</p>
          <ul>
            <li>Get help</li>
            <li>Add your restourant</li>
            <li>Sign up to deliver</li>
            <li>Create a business account</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.left}>
          <p>Order.uk Copyright 2024, All Rights Reserved.</p>
        </div>
        <div className={styles.right}>
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Pricing</p>
          <p>Do not sell or share my personal information</p>
        </div>
      </div>
    </div>
  )
}
