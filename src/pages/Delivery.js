import React from 'react'
import CatalogBar from '../components/catalogBar/CatalogBar';
import useMediaQuery from '../hooks/useMediaQuery';

const Delivery = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)"); 
  
  return (
    <section>
      <div className='sm:grid grid-cols-[2.5fr,7.5fr] gap-x-5 w-5/6 mx-auto py-7'>

        {isDesktop && <CatalogBar/>}

        <div>

          <h1 className='text-4xl mb-10'>Доставка</h1>

          <div className='flex flex-col gap-5'>
            <ul className=' list-decimal pl-5'>
              <li>Внимание, минимальная сумма заказа составляет 5 000 рублей;</li>
              <li>Доставка до подъезда в пределах МКАД без разгрузки (масса до 1,5 тонн.) – 1800 рублей;</li>
              <li>Стоимость 1 км. за МКАД – от 30 руб/км;</li>
              <li>Доставка осуществляется до подъезда покупателя. В стоимость доставки не входит разгрузка и подъем на этаж. Водитель машину не разгружает, стоимость выездных грузчиков уточняйте у наших менеджеров.</li>
              <li>Возможность разгрузки машины гидробортом 10 тонн и 5 тонн бесплатно;</li>
            </ul>
          
            <p>Доставка товаров осуществляется ежедневно без выходных, с понедельника по воскресенье в интервале с 8:00 до 22:00 часов. Оплата производится при получении товара в рублях или с помощью перевода через приложение банка.</p>

            <p>Заказчик должен дополнительно оплатить платный въезд нашей машины на территорию места назначения, если таковой имеется.</p>
          </div>


        </div>

      </div>
    </section>
  )
}

export default Delivery