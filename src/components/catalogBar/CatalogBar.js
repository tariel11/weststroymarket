import React from 'react'
import CatalogItem from '../CatalogItem/CatalogItem'


const CatalogBar = () => {
  return (
    <div className=''>
        <ul className='  flex flex-col gap-2 shadow-sm shadow-black '>
          <CatalogItem>СМЕСИ СТРОИТЕЛЬНЫЕ</CatalogItem> 
          <CatalogItem>ОБЩЕСТРОЙ</CatalogItem> 
          <CatalogItem>ИЗОЛЯЦИЯ</CatalogItem> 
          <CatalogItem>ИНСТРУМЕНТ</CatalogItem> 
          <CatalogItem>ПИЛОМАТЕРИАЛЫ</CatalogItem> 
          <CatalogItem>МЕТАЛЛ</CatalogItem> 
          <CatalogItem>ЛАКОКРАСОЧНЫЕ МАТЕРИАЛЫ</CatalogItem> 
          <CatalogItem>ЭЛЕКТРОТОВАРЫ</CatalogItem> 
          <CatalogItem>ИНЖЕНЕРНАЯ САНТЕХНИКА</CatalogItem> 
          <CatalogItem>ОТДЕЛОЧНЫЕ МАТЕРИАЛЫ</CatalogItem> 
        </ul>
      </div>
  )
}

export default CatalogBar