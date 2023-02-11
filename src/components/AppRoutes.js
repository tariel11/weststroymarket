import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from '../pages/AboutUs'
import Basket from '../pages/Basket'
import CategoryList from '../pages/CategoryList'
import Contacts from '../pages/Contacts'
import Delivery from '../pages/Delivery'

import Home from '../pages/Home'
import ProductPage from '../pages/ProductPage'
import SearchPage from '../pages/SearchPage'
import WishList from '../pages/WishList'
import { ABOUTUS_ROUTE, BASKET_ROUTE, CATEGORY_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE, HOME_ROUTE, PRODUCT_ROUTE, SEARCH_ROUTE, WISHLIST_ROUTE } from '../utils/consts'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home/>}/>
      <Route path={CATEGORY_ROUTE  + '/:category'} element={<CategoryList/>}/>
      <Route path={BASKET_ROUTE} element={<Basket/>}/>
      <Route path={SEARCH_ROUTE + '/:search'} element={<SearchPage/>}/>
      <Route path={DELIVERY_ROUTE} element={<Delivery/>}/>
      <Route path={ABOUTUS_ROUTE} element={<AboutUs/>}/>
      <Route path={CONTACTS_ROUTE} element={<Contacts/>}/>
      <Route path={WISHLIST_ROUTE} element={<WishList/>}/>
      <Route path={PRODUCT_ROUTE + ':title'} element={<ProductPage/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
  )
}

export default AppRoutes