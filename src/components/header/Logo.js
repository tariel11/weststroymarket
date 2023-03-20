import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../img/logo.svg'
import logo_black from '../../img/logo_black.svg'

const Logo = ({inHeader = true }) => {
  return (
    <div className=' max-w-[200px] '>
      <Link to={'/'}><img src={inHeader ? logo_black : logo} alt="logo" /></Link>
    </div>
  )
}

export default Logo