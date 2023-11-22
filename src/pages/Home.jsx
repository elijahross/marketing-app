import React from 'react'
import styles from "../styles.js"
import Hero from "../components/Hero.jsx"
import Stats from "../components/Stats.jsx"
import Testimonials from '../components/Testimonials.jsx'
import CTA from '../components/CTA.jsx'
import CardDeal from '../components/CardDeal.jsx'
import Business from '../components/Business.jsx'
import Billing from '../components/Billinger.jsx'
import Hook from '../components/Hook.jsx'
import Cookies from '../components/Cookies.jsx'


const Home = () => {
return(
    <div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
          <Cookies />
        </div>
      </div> 
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Stats></Stats>
          <Business></Business>
          <Billing></Billing>
          <CardDeal></CardDeal>
          <Hook></Hook>
          <Testimonials></Testimonials>
          <CTA></CTA>
        </div>
      </div>
      </div> 
)}

export default Home