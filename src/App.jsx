import React from 'react'
import styles from "./styles.js"
import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { ScrollRestoration } from 'react-router-dom'



export const App = () => {

  return(
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>
      <div className='mt-20'>
        <Outlet></Outlet>
        <ScrollRestoration
          getKey={(location, matches) => {
            // default behavior
            return location.key;
          }}/>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Footer></Footer>
        </div>
      </div>
    </div>
)} 
export default App