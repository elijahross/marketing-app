import React from 'react'
import {Link } from 'react-router-dom'


const Button = ({styles}) => {
  return (
    <Link to="/contact">
    <button type="button" className={`py-4 px-6 rounded-[10px] bg-black-gradient shadow-lg box-shadow ${styles}`} >
      <span className="glowing-txt">S</span>
      <span className='faulty-letter'>t</span>
      <span>art w</span>
      <span className='faulty-letter-2'>i</span>
      <span>t</span>
      <span className="">h </span>  
      <span className="glowing-txt-2">us</span>
      </button></Link>
  )
}

export default Button