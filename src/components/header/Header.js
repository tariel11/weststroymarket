import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import useMediaQuery from '../../hooks/useMediaQuery'
import Logo from './Logo';
import MyForm from '../UI/MyForm';
import BasketIcon from './BasketIcon';
import LikeIcon from './LikeIcon';
import MenuIcon from './MenuIcon';
import PhoneNumber from './PhoneNumber';
import { ABOUTUS_ROUTE, BASKET_ROUTE, CATEGORY_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE } from '../../utils/consts';

const Header = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)"); 

  return (
    <header className=' w-5/6 mx-auto pt-24'>

      <div className='bg-white z-10 fixed top-0 w-5/6 mx-auto grid grid-cols-[auto,1fr,auto,auto] items-center gap-x-5 py-5'>
        <Logo/>
        {isDesktop && <MyForm/>}
        <PhoneNumber/>
        <LikeIcon/>
        <BasketIcon/>
        {!isDesktop && <MenuIcon setIsMenuToggled={setIsMenuToggled} />}
      </div>

      {isDesktop && 
      (<nav className=' flex justify-between bg-green-600 text-yellow-200 tracking-wider'>
          <Link to={CATEGORY_ROUTE} className='w-full p-2 text-center border-r hover:text-black duration-300 border-yellow-200'>КАТАЛОГ</Link>
          <Link to={DELIVERY_ROUTE} className='w-full p-2 text-center border-r hover:text-black duration-300 border-yellow-200'>ДОСТАВКА</Link>
          <Link to={CONTACTS_ROUTE} className='w-full p-2 text-center border-r hover:text-black duration-300 border-yellow-200'>КОНТАКТЫ</Link>
          <Link to={ABOUTUS_ROUTE} className='w-full p-2 text-center border-r hover:text-black duration-300 border-yellow-200'>О НАС</Link>
          <Link to={BASKET_ROUTE} className='w-full p-2 text-center border-r hover:text-black duration-300 '>КОРЗИНА</Link>
      </nav>)}

     {!isDesktop && 
      (<div className={` z-20 absolute top-0  bg-slate-400 h-full p-5 flex duration-700 flex-col gap-10 text-black ` + (isMenuToggled ? " right-0" : "-right-[100%] hidden")}>
        <FontAwesomeIcon icon={faClose} className='text-xl' onClick={()=>setIsMenuToggled(false)}></FontAwesomeIcon>
        <div className='text-center'> 
          <a href="tel:+7 999 999 99 99" className=' text-xl'>+7 999 999 99 99</a>
        </div>
        <p className=' text-lg'>Каталог товаров товаров</p>
        <Link>Linkes</Link>
        <Link>Linkes</Link>
        <Link>Linkes</Link>
        <Link>Linkes</Link>
        <Link>Linkes</Link>
      </div>)}

      {!isDesktop &&<MyForm/>}

    </header>
  )
}

export default Header