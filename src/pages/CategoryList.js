import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CatalogBar from '../components/catalogBar/CatalogBar'
import useMediaQuery from '../hooks/useMediaQuery';
import { fetchCategoryProducts } from '../store/slices/products';
import ProductCart from '../components/productCart/ProductCart'
import {  useParams } from 'react-router-dom';

const Category = () => {
  const {category} = useParams()
  const isDesktop = useMediaQuery("(min-width: 768px)"); 
  const dispatch = useDispatch()
  const {categoryProducts} = useSelector(state => state.categoryProducts)

  const isLoading = categoryProducts.status === 'loading'

  useEffect(()=> {
    dispatch(fetchCategoryProducts(category))
  }, [])

  return (
    <section> 
      <div className='w-5/6 mx-auto py-7 sm:grid grid-cols-[2.5fr,7.5fr] gap-x-5'>

        {isDesktop && <CatalogBar/>}

        <div>

          <h1 className='text-4xl mb-5'>{category}</h1>

          <p className='mb-5'>Найдено товаров по категории {category}: {categoryProducts.items.length} </p>

          <div className='grid grid-cols-2 ss:grid-cols-3 gap-3'>
          { isLoading 
            ? (
                <div className='text-center font-bold text-4xl'>loading</div>
              ) 
            : (
              categoryProducts.items.map(product => 
                ( <ProductCart 
                    key={product.title}
                    product={product}
                />)
                  )
              ) }
          </div>
        </div>

      </div>
    </section>
  )
}

export default Category