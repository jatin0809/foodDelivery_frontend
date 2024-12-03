import React from 'react'
import styles from "./address.module.css"
import { Header, Navbar, Footer } from '../../components'
import { bArrow, add } from '../../src/assets'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Modal from "react-modal";
import AddressModal from '../../modals/addres'
import { deleteAddress } from '../../services/address'


Modal.setAppElement("#root");

export default function Address() {
  const navigate = useNavigate();
  const {address, userName, setUpdateAdd} = useContext(AppContext);
  const userId = localStorage.getItem("userId");
  

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const clickHandler = (userId, itemId) =>{
    const res = deleteAddress(userId, itemId)
    console.log(res.PromiseResult)
    setUpdateAdd(false)
  }

  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Header />
        <Navbar />
        <p className={styles.mainheading}> <img onClick={() =>navigate(-1)} src={bArrow} alt="" /> <span>Your Addresses</span></p>
        <div className={styles.addressContainer}>
          <div className={styles.add}>
            <img onClick={openModal} src={add} alt="" />
            <p>Add Address</p>
          </div>

          <AddressModal isOpen={isModalOpen} onRequestClose={closeModal} />

          <div className={styles.right}>
            {
              address.map((item, index)=> (
                <div key={index} className={styles.card}>
                  <p className={styles.userName}>{userName}</p>
                  <p className={styles.street}>{item.street }, {item.city }, {item.state }, {item.pincode}</p>
                  <p className={styles.phone}>Phone Number : {item.phoneNumber}</p>
                  {item.isDefault? <p className={styles.default}>Default</p>: ""}
                  <p className={styles.edit}>Edit</p>
                  <p onClick={()=> clickHandler(userId, item._id)} className={styles.remove}>Remove</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
