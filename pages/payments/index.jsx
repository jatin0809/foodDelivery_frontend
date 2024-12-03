import React from "react";
import styles from "./payments.module.css";
import { Header, Navbar, Footer } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { bArrow, Wallet } from "../../src/assets";

export default function Payments() {
  const navigate = useNavigate();
  const {cartData} = useContext(AppContext)

  const [selectedOption, setSelectedOption] = useState("");

  const paymentMethods = [
    { name: "Maestrokard", logo: "M" },
    { name: "Paypal", logo: "P" },
    { name: "Stripe", logo: "S" },
  ];

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Header />
        <Navbar />
        <p className={styles.mainheading}>
          {" "}
          <img onClick={() => navigate(-1)} src={bArrow} alt="" />{" "}
          <span>Choose and Pay</span>
        </p>
        <div className={styles.paymentContainer}>
          <div className={styles.left}>
            <div className={styles.topLine}>
              <img src={Wallet} alt="" />
              <span className={styles.walletTitle}>Wallet</span>
              <span className={styles.walletValue}>
                Available balance : ₹300
              </span>
            </div>
            <hr />
            <div className={styles.select}>
              {paymentMethods.map((method) => (
                <div  key={method.name}  className={`${styles.paymentOption} ${ selectedOption === method.name ? styles.selected : "" }`} >
                  <div className={styles.methodDetails}>
                    <span className={styles.logo}>{method.logo}</span>
                    <span className={styles.name}>{method.name}</span>
                  </div>
                  <input type="radio"  name="paymentMethod"  checked={selectedOption === method.name}  onChange={() => handleSelection(method.name)}   className={styles.radio} />
                </div>
                ))
              }
            </div>
            <p className={styles.debit} >+ Add Debit Card</p>
          </div>
          <div className={styles.right}>
            <div className={styles.box}>
              <p><span>Amount to be paid</span> <span className={styles.val}>₹{cartData.totalPrice + 20}</span> </p>
              <button onClick={()=> navigate("/successful")} className={styles.button}>Proceed Payment</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
