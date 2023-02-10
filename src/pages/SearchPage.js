import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CatalogBar from '../components/catalogBar/CatalogBar';
import ProductCart from '../components/productCart/ProductCart';
import useMediaQuery from '../hooks/useMediaQuery';
import { fetchSearchProducts } from '../store/slices/searchProducts';

const SearchPage = () => {
  const {search} = useParams()
  const isDesktop = useMediaQuery("(min-width: 768px)"); 

  const dispatch = useDispatch()
  const {searchProducts} = useSelector(state => state.searchProducts)

  const isLoading = searchProducts.status === 'loading'

  useEffect(()=> {
    dispatch(fetchSearchProducts(search))
  }, [])
  

  return (
    <section>
      <div className='sm:grid grid-cols-[2.5fr,7.5fr] gap-x-5 w-5/6 mx-auto py-7'>

        {isDesktop && <CatalogBar/>}

        <div>
          <h1 className='text-4xl mb-10'>Поиск по зпросу: {search}</h1>

          {searchProducts.items <= 0
          ? ( <p className='text-xl '>По вашему запросу нечего не найдено</p> )
          : (<div className='grid grid-cols-2 ss:grid-cols-3 gap-3'>
          {isLoading 
          ? (
              <div className='text-center font-bold text-4xl'>loading</div>
            ) 
          : (
            searchProducts.items.map(product => 
               ( <ProductCart 
                  key={product.title}
                  product={product}
               />)
                )
            ) }
          </div>)}

        </div>

      </div>
    </section>
  )
}

export default SearchPage