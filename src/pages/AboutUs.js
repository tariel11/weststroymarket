import React from 'react'
import CatalogBar from '../components/catalogBar/CatalogBar';
import useMediaQuery from '../hooks/useMediaQuery';

const AboutUs = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)"); 
  
  return (
    <section>
      <div className='w-5/6 mx-auto py-7'>
        <div className='sm:grid grid-cols-[2.5fr,7.5fr] gap-x-5'>

          {isDesktop && <CatalogBar/>}

          <div>
            <h1 className='text-4xl mb-10'>О нас</h1>
            <div className='flex flex-col gap-5'>
            <p>GetStroyMarket - Магазин Строительных Материалов</p>
            <p>“ GetStroyMarket” более 7 лет успешно работает в сфере розничных и оптовых продаж, формируя ассортимент качественных товаров для строительных и отделочных работ. Цель сайта - предоставить покупателю всю необходимую продукцию, чтобы они могли купить все необходимые строительные материалы в одном месте.</p>
            <p>У нас Вы найдёте доступные цены на предлагаемые товары. Это обусловлено тем, что мы работаем напрямую с поставщиками без привлечения посредников. Убедиться в умеренном уровне цен Вы сможете, изучив наш каталог товаров здесь.</p>
            <p>Интернет-магазин имеет собственные складские помещения. Ваш заказ сформируют и доставят в максимально быстрые сроки.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutUs