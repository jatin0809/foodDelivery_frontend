import React from 'react'
import styles from "./restourant.module.css"
import {useNavigate} from "react-router-dom"

export default function Restourants({data = [], title}) {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <p>{title} Restourants</p>
      <div className={styles.rest}>
        {
            data.map((item, index)=> (
                <div className={styles.card} key={index} >
                    <img src={item.image} alt="" onClick={()=> navigate("/products")}/>
                    <div className={styles.name}>
                        <p>{item.name}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}
