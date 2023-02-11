
import { Link } from 'react-router-dom';
import CatalogBar from '../components/catalogBar/CatalogBar'
import useMediaQuery from '../hooks/useMediaQuery';
import { CATEGORY_ROUTE } from '../utils/consts';

const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section>
      <div className='w-5/6 mx-auto py-7 '>

         <CatalogBar
            state={false}
            />


      </div>
    </section>
  )
}

export default Home