import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CatalogBar from '../components/catalogBar/CatalogBar'
import ProductCart from '../components/productCart/ProductCart'
import useMediaQuery from '../hooks/useMediaQuery';
import { clearWishList } from '../store/slices/wishList';
import { HOME_ROUTE } from '../utils/consts';

const WishList = () => {
  const dispatch = useDispatch()
  const {wishList} = useSelector(state => state.wishList)
  const isDesktop = useMediaQuery("(min-width: 768px)"); 

  const handleClearWishList = () => {
    dispatch(clearWishList())
  }

  return (
  <section>
    <div className='sm:grid grid-cols-[2.5fr,7.5fr] gap-x-5 w-5/6 mx-auto py-7'>

      {isDesktop && <CatalogBar/>}

      <div>

        <h1 className='text-4xl mb-10'>Список отложенных товаров</h1>

        {wishList <= 0 
        ? ( <div>Список пуст <Link to={HOME_ROUTE} className=' text-blue-500' >перейти к списку товаров</Link></div> ) 
        : (<div className='grid grid-cols-2 ss:grid-cols-3 gap-3'>
            {wishList.map(product => 
                ( <ProductCart 
                    key={product.title}
                    product={product}
                />)
              )}
            <span onClick={handleClearWishList} className='block w-fit p-2 bg-red-400 my-4'>Очистить корзину</span>
        </div>)}

      </div>

    </div>
  </section>
  )
}

export default WishList