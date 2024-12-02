import React from 'react'
import styles from "./product.module.css"
import { useState, useEffect, useContext } from 'react';
import { Footer, Header, Navbar, Bannerthree, Restourants, Testimonial, Map, Timings, SearchBar, ProductList } from '../../components'
import { AppContext } from '../../context/AppContext';

export default function Products() {

  const {data, testimonialData} = useContext(AppContext) 

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
