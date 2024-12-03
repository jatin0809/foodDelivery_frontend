import React from 'react'
import styles from "./checkout.module.css"
import { Header, Navbar, Restourants, Footer } from '../../components'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { bArrow, mapPin } from '../../src/assets'

export default function Checkout() {

  const {data, cartData, loadingCart, defaultAddress} = useContext(AppContext);
  const navigate = useNavigate();
  console.log(cartData)
  

  if (loadingCart || cartData === null) {
    return <p>Loading cart data...</p>;
  }

  if (cartData.length === 0 && defaultAddress.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Header />
        <Navbar />
        <p className={styles.mainheading}> <img onClick={() =>navigate("/products")} src={bArrow} alt="" /> <span>Your Order Details</span></p>
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
            <div onClick={()=> navigate("/address")} className={styles.inputContainer}>
              <div className={styles.logo}>
                <img src={mapPin} alt="Logo" />
              </div>
              <div className={styles.textContent}>
              <h4 className={styles.heading}>Delivery Address</h4>
              <p className={styles.description}>{defaultAddress.street}...</p>
              </div>
            </div>

            <div className={styles.item}>
              <p>Items <span>₹{cartData.totalPrice}</span></p>
              <p>Sales Tax <span>₹20</span></p>
            </div>
            <p className={styles.subTotal}>Subtotal ({cartData.items.length} items)  <span>₹{cartData.totalPrice +20}</span></p>
            
            <button onClick={()=> navigate("/payments")} className={styles.button}>Choose Payment Method</button>
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
