import React from 'react'
import styles from "./product.module.css"
import { useState, useEffect } from 'react';
import { Footer, Header, Navbar, Bannerthree, Restourants, Testimonial, Map, Timings, SearchBar, ProductList } from '../../components'
import { getImages } from '../../services/images';
import { getReviews } from '../../services/reviews';

export default function Products() {

  const [data, setData] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);


  const fetchData = async ()=>{
    const res = await getImages()
    const rev = await getReviews()
    setTestimonialData(rev)
    setData(res);
  }

    useEffect(()=> {
      fetchData();
    },[]);


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Header/>
        <Navbar/>
        <Bannerthree />
        <SearchBar />
        <ProductList discount={data.discount} />
        <Timings data={data.opening} />
        <Map />
      </div>
      <div className={styles.footer}>
        <Testimonial data={testimonialData} />
        <div className={styles.restourants}>
        <Restourants data={data.restourants} title={"Similar"} />
        </div>
        <Footer/>
      </div>
    </div>
  )
}
