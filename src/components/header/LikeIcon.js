import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {  WISHLIST_ROUTE } from '../../utils/consts';

const LikeIcon = () => {
  return (
    <div className=' text-center sm:block md:hidden'>
      <Link to={WISHLIST_ROUTE}>
        <FontAwesomeIcon icon={faHeart} className='text-xl'></FontAwesomeIcon> 
        <p className='text-xs'>Избранные</p>
      </Link>
    </div>
  )
}

export default LikeIcon