import React from 'react'
import styles from "./deals.module.css"

export default function Deals({data =[]}) {
   
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>Up to -40% 🎊 Order.uk exclusive deals</p>
        <ul>
            <li>Vegan</li>
            <li>Sushi</li>
            <li className={styles.active}>Pizza & Fast food</li>
            <li>others</li>
        </ul>
      </div>
      <div className={styles.bar}>
        {
          data.map((item, index)=> (
            <div className={styles.card} key={index}> 
              <img src={item.image} alt="" />
              <div className={styles.intro}>
                <p className={styles.title}>Restourant</p>
                <p className={styles.name}>{item.name}</p>
                <span>{item.discount}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}


// {data.map((item, index) => (
//     <div key={index}>
//       <h3>{item.name}</h3>
//     </div>
//   ))}