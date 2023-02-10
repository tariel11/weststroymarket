import React from 'react'
import CatalogBar from '../components/catalogBar/CatalogBar';
import useMediaQuery from '../hooks/useMediaQuery';

const Contacts = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)"); 
  
  return (
    <section>
      <div className='sm:grid grid-cols-[2.5fr,7.5fr] gap-x-5 w-5/6 mx-auto py-7'>
        {isDesktop && <CatalogBar/>}

        <div>

          <h1 className='text-4xl mb-10'>Наши контактыс</h1>

          <div className='flex flex-col gap-5'>

            <div>
              <p>Адрес Офиса и Склада:Осташковское шоссе, вл1Бс30</p>
              <p>Телефон:  +7 495 018-03-30</p>
              <p>Эл.почта: info@getstroymarket.ru</p>
              <p>Режим работы: пн-сб. 8:00 - 20:00 вс. 9:00 - 18:00</p>
            </div>

            <div>
              <h2 className='text-2xl mb-2'>Обратная связь</h2>

              <form className='p-5 border-2'>
                <input className='block mb-5 border-2 w-full p-2' type="text" placeholder='Иванов Иван Иванович' required/>
                <input className='block mb-5 border-2 w-full p-2' type="email" placeholder='ivanov@gamil.com' required/>
                <input className='block mb-5 border-2 w-full p-2' type="number" placeholder='+7 999 999 99 99' required/>
                <input className='block mb-5 border-2 w-full p-2' type="text" placeholder='Тема обращении' required/>
                <textarea className='block mb-5 border-2 w-full p-2' rows="5" cols="45" name="text" placeholder='Текст обращении' required></textarea>
                <button className='block mb-5 w-full p-2 bg-yellow-500'>Отправить</button>
              </form>

            </div>

            <div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contacts