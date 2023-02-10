import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BasketCart from '../components/BasketCart/BasketCart'
import { clearBasket } from '../store/slices/basket'

const Basket = () => {
  const dispatch = useDispatch()
  const {basket} = useSelector(state => state.basket)
  const {basketItems, userInfo} = basket

  let totalSum = basketItems.reduce((a, c) => a + c.price * c.quantity, 0)

  const [name,setName] = useState(userInfo.name || '') 
  const [email,setEmail] = useState(userInfo.email || '') 
  const [number,setNumber] = useState(userInfo.number || '') 
  const [comment,setComment] = useState(userInfo.comment || '') 

  const handleClearBasket = () => {
    dispatch(clearBasket())
  }

  return (
    <section>
      <div className='w-5/6 mx-auto py-7'>

        <h1 className='text-4xl mb-10'>Корзина</h1>

          <Link to={'/'} className='block text-center py-8 rounded-2xl border-dashed border-2 bg-slate-100 w-full duration-200 hover:text-lg hover:text-blue-400 hover:bg-slate-300' >Добавить товар</Link>
       
       {basketItems <= 0
       ? ( <div className='text-center my-5 text-3xl'>Корзина пуста</div> ) 
       : (<>
          <div>
            <div className='mb-4'>
              {basketItems.map(item => 
                <BasketCart 
                  key={item.title}
                  product={item}
                />     
              )}
              <span onClick={ handleClearBasket} className=' cursor-pointer block w-fit p-2 bg-red-400 my-4'>Очистить корзину</span>
            </div>
            <p className='mb-4 p-5 bg-slate-400 rounded-md text-white text-center'> Общая сумма ({basketItems.reduce((a, c) => a + c.quantity, 0)}{' '}товара) : {' '} {totalSum} рублей</p>
          </div>

          <div className='sm:grid grid-cols-2 gap-5'>

              <div className=' mb-6'>
                <h2 className='text-2xl mb-5'>Доставка и оплата</h2>
                <div className='bg-yellow-300 p-5'>
                  <p className=' border-t-2 mt-4'>Цена за доставку уточняется по телефону</p>
                  <p className=' border-t-2 mt-4'>Способ оплаты наличными или переводом на карту водителю</p>
                </div>
              </div>

              <div>
                <h2 className='text-2xl mb-5'>Форма заказа</h2>
                <form className='p-5 border-2'>
                  <input value={name} onChange={e => setName(e.target.value)} className='p-2 border-2 w-full mb-3 ' type="text" placeholder='Иванов Иван Иванович' />
                  <input value={email} onChange={e => setEmail(e.target.value)} className='p-2 border-2 w-full mb-3 ' type="text" placeholder='email' />
                  <input value={number} onChange={e => setNumber(e.target.value)} className='p-2 border-2 w-full mb-3 ' type="text" placeholder='+ 7 999 999 99 99' />
                  <input value={comment} onChange={e => setComment(e.target.value)} className='p-2 border-2 w-full mb-3 ' type="text" placeholder='Доп комментарии' />
                  <button className=' bg-yellow-500 w-full p-3 text-xl'>Оформить заказ</button>
                </form>
              </div>
          </div>
        </>)}

      </div>
    </section>
  )
}

export default Basket