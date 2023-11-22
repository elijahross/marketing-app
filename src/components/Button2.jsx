import React from 'react'
import { NavLink } from 'react-router-dom'


const Button2 = ({styles, input, nav}) => {
  return (
    <button type="button" className={`py-4 bg-transparen glowing-btn px-6 ${styles}`}>
      <NavLink to={nav}>{input}</NavLink>
      </button>
  )
}

export default Button2