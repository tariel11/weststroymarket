import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../img/logo.svg'

const Logo = () => {
  return (
    <div className=' max-w-[200px]'>
      <Link to={'/'}><img src={logo} alt="logo" /></Link>
    </div>
  )
}

export default Logo