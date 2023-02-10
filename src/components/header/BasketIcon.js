import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { BASKET_ROUTE } from '../../utils/consts';
import { useSelector } from 'react-redux';

const BasketIcon = () => {
  const {basket} = useSelector(state => state.basket)
  const {basketItems} = basket

  return (
    <div className='relative text-center'>
      <Link to={BASKET_ROUTE}> 
        <span className=' absolute -top-2 -right-2 text-xl'>{basketItems.reduce((a, c) => a + c.quantity, 0) }</span>
        <FontAwesomeIcon icon={faShoppingBasket} className='text-xl'></FontAwesomeIcon> 
        <p className='text-xs'>Корзина</p>
      </Link>
    </div>
  )
}

export default BasketIcon