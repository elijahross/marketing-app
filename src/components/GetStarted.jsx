import React from 'react'
import styles from '../styles'
import { arrowUp } from '../assets'
import { NavLink } from 'react-router-dom'


const GetStarted = () => {
  return (
    <div className="mt-20"><NavLink to="/contact">
    <div className={`${styles.flexCenter} get-started absolute w-[140px] h-[140px] rounded-full animate-spin2 bg-[#61efff]`}> </div>
    <div className={`${styles.flexCenter} relative z-[9] w-[140px] h-[140px] rounded-full bg-transparent p-[1.5px] hover:p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
          
            <div className={`${styles.flexStart} flex-row`}>
                <p className="font-raleway fontmedium text-[18px] leading-[23px] mr-1">
                    <span className='get-started font-raleway text-[#61efff]'>Get </span>
                </p>
                <img src={arrowUp} alt="arrow" className="get-started w-[23px] h-[23px] object-contain" />
            </div>
            <p className="font-raleway font-medium text[18px] leading-[23px]">
            <span className="get-started text-gradient">Started</span>
            </p>
         
        </div>
    </div> 
    </NavLink>
    </div>
  )
}

export default GetStarted