import React from 'react'
import { NavLink } from 'react-router-dom'

const Button3 = ({styles, input}) => {
  return (
    <div className=''>
    <NavLink to="/blog">
    <button type="button" className={`font-raleway py-4 px-6 bg-gray-gradient glowing-btn rounded-[10px] ${styles}`}>{input}</button>
    </NavLink>
    </div>
  )
}

export default Button3