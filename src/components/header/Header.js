import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import useMediaQuery from '../../hooks/useMediaQuery'
import Logo from './Logo';
import MyForm from '../UI/MyForm';
import BasketIcon from './BasketIcon';
import CatalogBar from '../catalogBar/CatalogBar'
import LikeIcon from './LikeIcon';
import MenuIcon from './MenuIcon';
import PhoneNumber from './PhoneNumber';
import { ABOUTUS_ROUTE, BASKET_ROUTE, CATEGORY_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE, HOME_ROUTE } from '../../utils/consts';

const Header = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)"); 

  return (
    <header className='bg-white  pt-24'>

      <div className='bg-white z-10 fixed top-0 w-full px-5  grid grid-cols-[auto,1fr,auto,auto] items-center gap-x-5 py-5'>
        <Logo/>
        {isDesktop && <MyForm/>}
        <PhoneNumber/>
        <LikeIcon/>
        <BasketIcon/>
        {!isDesktop && <MenuIcon setIsMenuToggled={setIsMenuToggled} />}
      </div>


      {isDesktop && 
      (<nav className=' flex justify-between bg-green-600 text-yellow-200 tracking-wider'>
          <Link to={HOME_ROUTE} className='w-full p-2 text-center border-r hover:text-black duration-300 border-yellow-200'>ГЛАВНАЯ</Link>
          <Link to={DELIVERY_ROUTE} className='w-full p-2 text-center border-r hover:text-black duration-300 border-yellow-200'>ДОСТАВКА</Link>
          <Link to={CONTACTS_ROUTE} className='w-full p-2 text-center border-r hover:text-black duration-300 border-yellow-200'>КОНТАКТЫ</Link>
          <Link to={ABOUTUS_ROUTE} className='w-full p-2 text-center border-r hover:text-black duration-300 border-yellow-200'>О НАС</Link>
          <Link to={BASKET_ROUTE} className='w-full p-2 text-center border-r hover:text-black duration-300 '>КОРЗИНА</Link>
      </nav>)}

     {!isDesktop && 
      (<div className={`z-20 absolute top-0  bg-slate-400 w-full h-full p-5 flex duration-700 flex-col gap-5 text-black ` + (isMenuToggled ? " right-0" : "-right-[100%] hidden")}>
        <FontAwesomeIcon icon={faClose} className='absolute top-5 right-5 text-4xl ml-auto' onClick={()=>setIsMenuToggled(false)}></FontAwesomeIcon>
        <div className='flex flex-col gap-1'> 
          <h2 className='font-bold text-2xl'>Контакты</h2>
          <a className='text-xl' href='tel:+79999999999'>+7 999 999 99 99</a>
          <a href='mail:mail@mail.com'>mail@mail.com</a>
        </div>

        <div>
          <h2 className='text-xl mb-2'>Навинация</h2>
          <ul className='flex flex-col text-base '>
            <Link to={HOME_ROUTE} className='block w-full border-b-2 p-2 bg-yellow-400'>ГЛАВНАЯ</Link>
            <Link to={DELIVERY_ROUTE} className='block w-full border-b-2 p-2 bg-yellow-400'>ДОСТАВКА</Link>
            <Link to={CONTACTS_ROUTE} className='block w-full border-b-2 p-2 bg-yellow-400'>КОНТАКТЫ</Link>
            <Link to={ABOUTUS_ROUTE} className='block w-full border-b-2 p-2 bg-yellow-400'>О НАС</Link>
            <Link to={BASKET_ROUTE} className='block w-full border-b-2 p-2 bg-yellow-400'>КОРЗИНА</Link>
          </ul>
        </div>

        <div>
          <h2  className='text-xl mb-2' >Каталог</h2>
          <CatalogBar
            state={false}
            />   
        </div>
      </div>)}

      <div className='w-5/6 mx-auto pb-10'>

        {!isDesktop &&<MyForm/>}
      </div>

    </header>
  )
}

export default Header