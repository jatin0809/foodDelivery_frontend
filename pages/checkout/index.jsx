import React from 'react'
import styles from "./checkout.module.css"
import { Header, Navbar, Restourants, Footer } from '../../components'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { bArrow } from '../../src/assets'

export default function Checkout() {

  const {data, cartData, loadingCart} = useContext(AppContext);
  const navigate = useNavigate();
  

  if (loadingCart || cartData === null) {
    return <p>Loading cart data...</p>;
  }

  if (cartData.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Header />
        <Navbar />
        <p className={styles.heading}> <img onClick={() =>navigate("/products")} src={bArrow} alt="" /> <span>Your Order Details</span></p>
        <div className={styles.data}>
          <div className={styles.left}>
            <div className={styles.cardContainer}>
            {
              cartData.items.map((item, index)=>(
                <div className={styles.card} key={index}>
                  <img className={styles.logo} src={item.productImage} alt="" />
                  <div className={styles.details}>
                    <p>{item.productName}</p>
                    <span>{item.quantity}x item</span>
                  </div>
                  <p className={styles.price} >₹{item.price * item.quantity}</p>
                </div>
              ))
            }
            </div>

            <div className={styles.notes}>
              <p>Notes</p>
              <input type="text" placeholder="Add order notes" />
            </div>
          </div>
          <div className={styles.right}>

          </div>
          
        </div>

        <Restourants data={data.restourants} title={"Similar"} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
