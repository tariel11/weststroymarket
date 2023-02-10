import React, { useState } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import test from '../img/test.jpeg'
import QuantityButtons from '../components/UI/QuantityButtons'
import CatalogBar from '../components/catalogBar/CatalogBar'
import useMediaQuery from '../hooks/useMediaQuery'

const ProductPage = () => {

  const isDesktop = useMediaQuery("(min-width: 768px)"); 
  const [isAdded, setIsAdded] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isElem, setIsElem] = useState('product')
  
  const addToBasketHandler = () => {
    setIsAdded(true)
  }
  const addToLikedHandler = () => {
    setIsLiked(!isLiked)
  }

  return (
    <section>
      <div className='w-5/6 mx-auto py-7 sm:grid grid-cols-[2.5fr,7.5fr] gap-5'>

      {isDesktop && <CatalogBar/>}

      <div>
        <h1 className='text-2xl xs:text-4xl mb-5'>Штукатурка Гипсовая Старатели 30 кг</h1>

        <div className='grid grid-cols-[auto,auto,auto,auto] text-xs border-t-2 overflow-hidden text-center'>
          <p onClick={()=>setIsElem('product')} className={`cursor-pointer border-x-2 border-b-2 bg-slate-100 p-2 ` + (isElem === 'product' ? "border-b-0 bg-white" : "")}>Товар</p>
          <p onClick={()=>setIsElem('description')} className={`cursor-pointer border-x-2 border-b-2 bg-slate-100 p-2 ` + (isElem === 'description' ? "border-b-0 bg-white" : "")}>Описание</p>
          <p onClick={()=>setIsElem('info')} className={`cursor-pointer border-x-2 border-b-2 bg-slate-100 p-2 ` + (isElem === 'info' ? "border-b-0 bg-white" : "")}>Характеристики</p>
          <p onClick={()=>setIsElem('delivery')} className={`cursor-pointer border-x-2 border-b-2 bg-slate-100 p-2 ` + (isElem === 'delivery' ? "border-b-0 bg-white" : "")}>Доставка</p>
        </div>

        {isElem === 'product' && 
        <div className='ss:grid grid-cols-2 md:grid-cols-[2fr,1fr] gap-5 items-center'>
          <div>
            <img className='block mx-auto' src={test} alt="alt" />
          </div>
        
          <div className="buy">
            <p className='mb-4 font-semibold'>Цена товара 1999 P</p>
            <button className=' w-full mb-3 p-1 bg-slate-300'>Купить в клик</button>
            <button className=' w-full mb-3 p-1 bg-slate-300'>Добавить в отложенные <FontAwesomeIcon icon={faHeart} className={`cursor-pointer ` + (isLiked ? ' text-red-500' : ' text-slate-400') } onClick={addToLikedHandler}/></button>
            {!isAdded 
            ? <button className=' w-full p-1 bg-yellow-500' onClick={addToBasketHandler}>В корзину</button>
            : <QuantityButtons/> }
          </div>
        </div>}

        {isElem === 'description' && 
        <div className='py-5'>
          <h3 className='text-xl mb-4'>Описание</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores deserunt, maiores et perspiciatis ipsa sit sapiente dolorem cupiditate, itaque ea facere veritatis dignissimos, aliquam perferendis quaerat illum explicabo ab ullam.</p>
        </div>}

        {isElem === 'info' && 
        <div className='py-5'>
          <h3 className='text-xl mb-4'>Характеристики</h3>
          <ul>
            <li>Бренд................Старатели</li>
            <li>Бренд................Старатели</li>
            <li>Бренд................Старатели</li>
            <li>Бренд................Старатели</li>
            <li>Бренд................Старатели</li>
          </ul>
        </div>}

        {isElem === 'delivery' && 
        <div className='py-5'>
          <h3 className='text-xl mb-4'>Доставка</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores deserunt, maiores et perspiciatis ipsa sit sapiente dolorem cupiditate, itaque ea facere veritatis dignissimos, aliquam perferendis quaerat illum explicabo ab ullam.</p>
        </div>}

      </div>

     </div>
    </section>
  )
}

export default ProductPage