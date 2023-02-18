
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogBar from '../components/catalogBar/CatalogBar'
import MyMap from '../components/MyMap/MyMap';
import MySlider from '../components/MySlider/MySlider';
import ProductsCarousel from '../components/ProductsCarousel/ProsuctsCarousel';
import useMediaQuery from '../hooks/useMediaQuery';
import { fetchCategoryProducts } from '../store/slices/products';

const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const dispatch = useDispatch()
  const {categoryProducts} = useSelector(state => state.categoryProducts)

  const isLoading = categoryProducts.status === 'loading'

  useEffect(()=> {
    dispatch(fetchCategoryProducts("Влагостойкий"))
  }, [])

  return (
    <section>
      <div className='w-5/6 mx-auto py-7 '>

        <div className='sm:grid grid-cols-[3fr,7fr] gap-x-5 mb-7'>
          {isDesktop && <CatalogBar/>}
          <div className='w-full flex flex-col gap-7'>
            <MySlider/>
            <div className='flex flex-col gap-5'>
              <h1 className='text-2xl md:text-4xl font-bold text-center mb-2'>GETSTROYMARKET — оптово-розничный магазин строительных товаров</h1>
              <p>Добро пожаловать на сайт нашего магазина. Мы работаем уже больше 7 лет. Все это время мы рады обеспечивать вас самыми востребованными товарами для стройки и ремонта. Наш магазин продает строительные материалы в Москве и Московской области. Мы открыты каждый день, без выходных.</p>
              <p>Наш интернет-магазин строительных товаров отличается доступными ценами и выгодными условиями сотрудничества. Мы приобретаем продукцию напрямую у поставщиков, минуя посредников, поэтому сохраняем привлекательный прайс даже в современных реалиях.</p>
              <p>На сайте строительного магазина GetStroyMarket можно купить товары оптом и в розницу онлайн. Просто соберите нужные позиции в корзине и нажмите «оформить заказ». Чтобы узнать подробную информацию по ассортименту, позвоните по телефону +7 (495) 018-03-30 — наши сотрудники с удовольствием вам помогут. У нас есть собственный склад,автопарк так что долго ждать доставку не придется.</p>
              <p>Имейте в виду, что указанные на сайте цены — не окончательные. В зависимости от объема и условий сотрудничества мы можем сделать интересное предложение. Ждем заказов и звонков!</p>
            </div>
          </div>
        </div>

        <div>
          {/* brands */}
          <div>
            <ProductsCarousel
              products={categoryProducts.items}
            />
          </div>

          {/* popular */}
          <div>

          </div>

          {/* new */}
          <div>

          </div>

          {/* sales */}
          <div>

          </div>
        </div>

      </div>
      {/* MAP */}

      <div className='mt-10'>
          <MyMap/>
        </div>
    </section>
  )
}

export default Home