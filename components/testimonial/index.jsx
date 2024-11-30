import React from 'react'
import styles from "./testimonial.module.css"
import { stars } from '../../src/assets'
import { formatDate } from '../../helper/formatDate'
import { useState } from 'react'

export default function Testimonial({data =[]}) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 3;

  // Handle sliding left
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - visibleTestimonials : prevIndex - 1
    );
  };

    // Handle sliding right
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex + visibleTestimonials >= data.length ? 0 : prevIndex + 1
        );
      };

    
  return (
    <div className={styles.container}>
       <p className={styles.title}>Customer Reviews</p>
       <img className={styles.rating} src="https://res.cloudinary.com/dlu2nu7py/image/upload/v1732714582/Rectangle_64_khym8u.png" alt="" />
      <div className={styles.buttons}>
        <button className={styles.prev} onClick={handlePrev}> &lt; </button>
        <button className={styles.next} onClick={handlePrev}> &gt;  </button>
      </div>
        
      <div className={styles.slider}>
      {data
          .slice(currentIndex, currentIndex + visibleTestimonials)
          .map((item, index) => (
            <div className={styles.card} key={index}>
              <img className={styles.profile} src={item.image} alt="" />
              <div className={styles.line}></div>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.city}>{item.city}</p>
              <img className={styles.stars} src={stars} alt="" />
              <p className={styles.date}>🕛 {formatDate(item.createdAt)}</p>
              <div className={styles.info}>
                <p>{item.info}</p>
              </div>
            </div>
          ))}
      </div>
      <div className={styles.foot}>

      </div>
    </div>
  )
}
