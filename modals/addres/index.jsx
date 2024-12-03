import React from 'react'
import styles from "./address.module.css"
import Modal from "react-modal";
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useState } from 'react';
import { addAddressToDatabase } from '../../services/address';

Modal.setAppElement("#root");

export default function AddressModal({ isOpen, onRequestClose}) {

    const {userName, setUpdateAdd} = useContext(AppContext);
    const userId = localStorage.getItem("userId");

    const [formData, setFormData] = useState({
        state: "",
        city: "",
        pincode: "",
        phoneNumber: "",
        street: ""
      });
    
      const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
      
      };

  const onSubmit = async (e) =>{
    e.preventDefault();

    const res = await addAddressToDatabase(userId, userName, formData)
    if(res.success){
        setUpdateAdd(false)
    }
    else{
        console.log(res)
    }
    onRequestClose()
  }

  
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName={styles.modalOverlay} className={styles.container} >
        <div className={styles.modalBody} >
            <p>Add Address</p>
            <div className={styles.formContainer}>
                <form  >
                    <div className={styles.row}>
                        <input type="text" name='state' value={formData.state} onChange={handleChange} placeholder="State" className={styles.input} />
                        <input type="text" name='city' value={formData.city} onChange={handleChange} placeholder="City/District" className={styles.input} />
                        <input type="text" name='pincode' value={formData.pincdoe} onChange={handleChange} placeholder="Pin Code" className={styles.input} />
                        <input type="text" name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" className={styles.input} />
                    </div>
                    <div className={styles.row}>
                    <input type="text" name='street' value={formData.street} onChange={handleChange} placeholder="Enter full address" className={styles.bigInput} />
                    </div>
                    <button type='submit' className={styles.submitBtn} onClick={onSubmit} > Save</button>
                </form>
            </div>
        </div>
    </Modal>
  )
}
