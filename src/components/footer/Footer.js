import React from 'react'
import { Link } from 'react-router-dom'
import { ABOUTUS_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE } from '../../utils/consts'

const Footer = () => {
  return (
    <footer className=' bg-slate-400 mt-auto'>
      <div className='w-5/6 mx-auto py-5 xs:grid grid-cols-2'>
        <div className='mb-5'>
          <h3 className='font-bold text-2xl text-yellow-500 mb-4'>Информация</h3>
          <ul className='flex flex-col gap-3 text-blue-700'>
            <li>
              <Link to={CATALOG_ROUTE}>Каталог товаров</Link>
            </li>
            <li>
              <Link to={ABOUTUS_ROUTE}>О нас</Link>
            </li>
            <li>
              <Link to={DELIVERY_ROUTE}>Доставка</Link>
            </li>
            <li>
              <Link to={BASKET_ROUTE}>Корзина</Link>
            </li>
            <li>
              <Link to={CONTACTS_ROUTE}>Контакты</Link>
            </li>
          </ul>
        </div>
        
        <div className='mb-5'>
          <h3 className='font-bold text-2xl text-yellow-500 mb-4'>Каталог</h3>
          <ul className='flex flex-col gap-3 text-blue-700'>
            <li>
              <Link>Сфеупщкн шеуь</Link>
            </li>
            <li>
              <Link>Сфеупщкн шеуь</Link>
            </li>
            <li>
              <Link>Сфеупщкн шеуь</Link>
            </li>
            <li>
              <Link>Сфеупщкн шеуь</Link>
            </li>
            <li>
              <Link>Сфеупщкн шеуь</Link>
            </li>
          </ul>
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