import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import useMediaQuery from '../../hooks/useMediaQuery';
import QuantityButtons from '../UI/QuantityButtons';
import { useDispatch } from 'react-redux';
import { increaseProduct, decreaseProduct, removeProduct } from '../../store/slices/basket';

const BasketCart = ({product}) => { 
  const dispatch = useDispatch()
  const isMobile = useMediaQuery("(min-width: 375px)");

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product))
  }

  const handleDecreaseProduct = () => {
    dispatch(decreaseProduct(product))
  }

  const handleIncreaseProduct = (product) => {
    dispatch(increaseProduct(product))
  }

  return (
    <div className={`relative grid gap-3 items-center border-b-2 text-center p-3 pt-7 xs:pt-3 ss:grid-cols-[1fr,4fr,2fr] ` + (isMobile ? 'grid-cols-[1fr,2fr,1fr] ' : 'grid-cols-2') }>

      <div className={`text-center ` + (isMobile ? 'block' : 'hidden')}>
        <img src={product.img} alt="alt" className='w-full object-contain' />
      </div>

      <p className='font-medium'>{product.title}</p>

      <div>
        <p className="text-center mb-4">Цена: <span>{product.price}</span></p>
        <QuantityButtons 
          product={product}
          handleDecreaseProduct={handleDecreaseProduct}
          handleIncreaseProduct={handleIncreaseProduct}
          quantity={product.quantity}
        />
        <p className="text-center mt-4">Сумма: <span className='font-bold'>{product.price * product.quantity}</span></p>
      </div>

      <button className="absolute top-2 right-2" onClick={() => handleRemoveProduct(product)}>
        <FontAwesomeIcon icon={faTrash} className='text-red-500'></FontAwesomeIcon>
      </button>

    </div>
  )
}

export default BasketCart