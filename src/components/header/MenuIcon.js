import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MenuIcon = ({setIsMenuToggled}) => {
  return (
    <div className='cursor-pointer' onClick={()=>setIsMenuToggled(true)}>
      <FontAwesomeIcon icon={faBars} className='text-2xl text-white p-1 rounded-md bg-slate-500'></FontAwesomeIcon> 
    </div>
  )
}

export default MenuIcon