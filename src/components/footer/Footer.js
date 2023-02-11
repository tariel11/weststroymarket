import { faArrowRight, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ABOUTUS_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE, HOME_ROUTE } from '../../utils/consts'
import CatalogBar from '../catalogBar/CatalogBar'

const Footer = () => {

  const [info, setInfo] = useState(false)
  const [catalog, setCatalog] = useState(false)

  return (
    <footer className=' bg-slate-400 mt-auto'>
      <div className='w-5/6 mx-auto py-5 xs:grid grid-cols-2 gap-x-5'>
        <div className='mb-5'>
          <div onClick={()=>setInfo(!info)} className='flex justify-between items-center gap-5 w-max font-bold text-2xl text-yellow-500 mb-4'><h3>Информация</h3> <FontAwesomeIcon icon={info ? faClose : faArrowRight} className='text-3xl rotate-90' /> </div>
          <ul className={info ? 'flex flex-col gap-3 text-blue-700' : 'hidden'}>
            <Link to={HOME_ROUTE} className='block w-full border-b-2 p-2 bg-yellow-400'>ГЛАВНАЯ</Link>
            <Link to={DELIVERY_ROUTE} className='block w-full border-b-2 p-2 bg-yellow-400'>ДОСТАВКА</Link>
            <Link to={CONTACTS_ROUTE} className='block w-full border-b-2 p-2 bg-yellow-400'>КОНТАКТЫ</Link>
            <Link to={ABOUTUS_ROUTE} className='block w-full border-b-2 p-2 bg-yellow-400'>О НАС</Link>
            <Link to={BASKET_ROUTE} className='block w-full border-b-2 p-2 bg-yellow-400'>КОРЗИНА</Link>
          </ul>
        </div>
        
        <div className='mb-5'>
          <div onClick={()=>setCatalog(!catalog)} className='flex justify-between items-center gap-5 w-max font-bold text-2xl text-yellow-500 mb-4'><h3>Каталог</h3> <FontAwesomeIcon icon={catalog ? faClose : faArrowRight} className='text-3xl rotate-90' /> </div>
          <div className={catalog ? 'block' : 'hidden'}>
            <CatalogBar
              state={false}
              />  
          </div>
        </div>

        <div className='mb-5 flex flex-col '>
          <h2 className='font-bold text-2xl text-yellow-500 mb-4'>Контакты</h2>
          <a className='mb-3 text-xl' href='tel:+79999999999'>+7 999 999 99 99</a>
          <a href='mail:mail@mail.com'>mail@mail.com</a>
        </div>

      </div>
      <p className='text-center py-5 border-t-2'>coopyright. 2023</p>
    </footer>
  )
}

export default Footer