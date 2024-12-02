import React, { useEffect, useState, useContext } from 'react'
import styles from "./home.module.css";
import { Footer, Header, Navbar, Banner, Deals, Category, Restourants, Bannertwo, Promotion, Workflow, Display } from '../../components';
import { getImages } from '../../services/images';
import { AppContext } from '../../context/AppContext';

export default function Home() {
  
  const {data} = useContext(AppContext);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Header />
        <Navbar />
        <Banner />
        <Deals data={data.deals} />
        <Category data ={data.Category} />
        <Restourants data={data.restourants} title={"Popular"} />
        <Bannertwo />
        <Promotion data={data.promotions} />
        <Workflow data={data.workflow} />
        <Display/>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
