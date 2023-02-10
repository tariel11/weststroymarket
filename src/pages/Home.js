
import { Link } from 'react-router-dom';
import CatalogBar from '../components/catalogBar/CatalogBar'
import useMediaQuery from '../hooks/useMediaQuery';
import { CATEGORY_ROUTE } from '../utils/consts';

const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const categories = [{title: 'Армированная стяжка пола', slug: ''},{title: 'Декоративная штукатурка Короед', slug: ''},{title: 'Влагостойкий', slug: ''},{title: 'forth category', slug: ''},]

  return (
    <section>
      <div className='w-5/6 mx-auto py-7 sm:grid grid-cols-[2.5fr,7.5fr] gap-x-5'>

          {isDesktop && <CatalogBar/>}

          <div>

            <h1 className='text-4xl mb-10'>Каталог </h1>


            <ul className='flex flex-col gap-5'>
              {categories.map(c =>
                  <li className=' text-lg bg-slate-500 p-2 text-white cursor-pointer' key={c.title}><Link to={CATEGORY_ROUTE + `/${c.title}`} >{c.title}</Link></li>
                )}
            </ul>

          </div>
      </div>
    </section>
  )
}

export default Home