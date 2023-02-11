import React from 'react'
import CatalogItem from '../CatalogItem/CatalogItem'
import { categories } from '../../utils/consts'

const CatalogBar = ({state}) => {


  return (
    <div className=''>
        <ul className='relative bg-gray-800 text-white flex flex-col shadow-sm shadow-black '>
          
          {categories.map(category => 
            <CatalogItem
              key={category.title}
              title={category.title}
              items={category.items}
              state={state}
            />   
          )}

        </ul>
      </div>
  )
}

export default CatalogBar