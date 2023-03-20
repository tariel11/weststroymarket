import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../../utils/consts'
import QuantityButtons from '../UI/QuantityButtons'
import { decreaseProduct, increaseProduct } from '../../store/slices/basket'
import { addToWishList } from '../../store/slices/wishList'


const ProductCart = ( {product} ) => {
  const dispatch = useDispatch()

  const {basket} = useSelector(state => state.basket)
  const {basketItems} = basket

  const storeProduct = basketItems.filter(item => item.title === product.title)[0]

  const [isLiked, setIsLiked] = useState(false)

  const handleDecreaseProduct = () => {
    dispatch(decreaseProduct(product)) 
  }

  const handleIncreaseProduct = (product) => {
    dispatch(increaseProduct(product))
  }

  const handleAddToWishList = () => {
    dispatch(addToWishList(product))
    setIsLiked(true)
  }

  return (
    <div className="relative grid grid-rows-[2fr,1.1fr,auto] pt-5 min-h-[300px]  p-3 border-[1px] hover:shadow-2xl duration-300">

      <FontAwesomeIcon icon={faHeart} onClick={() => !isLiked && handleAddToWishList()} className={`absolute top-2 right-2 cursor-pointer ` + (isLiked ? ' text-red-500' : ' text-slate-400') } />

      <div className="w-full mb-3">
        <Link to={PRODUCT_ROUTE + product.title} className="w-full h-full" ><img src={product.img} alt="alt" className='w-full h-full object-contain' /></Link>
      </div>

      <div className=" pb-5">
        <i className=' text-xs'>артикуль 01118043</i>
        <Link><p className=' text-sm'>{product.title}</p></Link>
      </div>

      <div className="mt-auto">
        <p className='mb-4 font-semibold'>{product.price} P</p>
          {storeProduct
          ? <QuantityButtons
              product={product}
              handleDecreaseProduct={handleDecreaseProduct}
              handleIncreaseProduct={handleIncreaseProduct}
              quantity={storeProduct.quantity}
            />
          : <button className=' w-full p-1 bg-yellow-500' onClick={() =>  handleIncreaseProduct(product)}>В корзину</button> }
      <button className=' w-full mt-3 p-1 bg-slate-300'>Купить в клик</button>
      </div>

    </div>
  )
}

export default ProductCart