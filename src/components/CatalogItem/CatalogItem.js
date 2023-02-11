import { faArrowRight, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORY_ROUTE } from '../../utils/consts'


const CatalogSubItem = ({i, state,}) => {
  const [lookItem, setLookItem] = useState(false)

  const desktop = {
    itemList: 'px-3 group/second hover:bg-slate-300',
    itemLink: 'flex items-center justify-between gap-3 border-b-2 border-neutral-500 p-3',

    subItemUl: ' hidden absolute top-0 left-full bg-slate-300 group-hover/second:flex flex-col  w-max h-full overflow-scroll',
    subItemList: 'relative px-3 ',
    subItemLink: 'block border-b-2 border-neutral-500 p-3',

  }

  const mobile = {
    itemList: 'px-3 group/second hover:bg-slate-300',
    itemLink: 'flex items-center justify-between gap-3 border-b-2 border-neutral-500 p-3',

    subItemUl: `bg-slate-300  w-auto h-full duration-500 ${lookItem ? ' flex flex-col' : ' hidden'}`,
    subItemList: 'relative px-3 ',
    subItemLink: 'block border-b-2 border-neutral-500 p-3',

    arrow: 'rotate-90'
  }

  return <li key={i.title} className={state ? desktop.itemList : mobile.itemList} >

          {!i.subItems          
            ? <Link onClick={()=>setLookItem(!lookItem)}  to={CATEGORY_ROUTE + `/${i.title}`} className={state ? desktop.itemLink : mobile.itemLink} ><p>{i.title}</p> {!i.subItems <= 0 && <FontAwesomeIcon icon={!state ? (lookItem ? faClose : faArrowRight) : faArrowRight} className={state ? '' : mobile.arrow} />} </Link>
            : <div onClick={()=>setLookItem(!lookItem)}  className={state ? desktop.itemLink : mobile.itemLink} ><p>{i.title}</p> {!i.subItems <= 0 && <FontAwesomeIcon icon={!state ? (lookItem ? faClose : faArrowRight) : faArrowRight} className={state ? '' : mobile.arrow} />} </div>
          }

        {!i.subItems <= 0 && 
          <ul className={state ? desktop.subItemUl : mobile.subItemUl} >

              {i.subItems.map(subItem => 
                <li key={subItem.title} className={state ? desktop.subItemList : mobile.subItemList} >
                  <Link to={CATEGORY_ROUTE + `/${subItem.title}`} className={state ? desktop.subItemLink : mobile.subItemLink} >{subItem.title}</Link>
                </li>
                )}

          </ul>}

        </li>  
}

const CatalogItem = ({title, items, state = true}) => {
  const [look, setLook] = useState(false)
  const [lookItem, setLookItem] = useState(false)

  const desktop = {
    parentList: 'border-b-2 border-black group/first hover:bg-slate-200 hover:text-black',
    parentLink: 'flex items-center justify-between gap-3 w-full h-full p-3',

    itemUl: 'z-10 hidden absolute top-0 left-full text-sm bg-slate-200 group-hover/first:flex flex-col  w-max h-full',
    itemList: 'px-3 group/second hover:bg-slate-300',
    itemLink: 'flex items-center justify-between gap-3 border-b-2 border-neutral-500 p-3',

    subItemUl: ' hidden absolute top-0 left-full bg-slate-300 group-hover/second:flex flex-col  w-max h-full overflow-scroll',
    subItemList: 'relative px-3 ',
    subItemLink: 'block border-b-2 border-neutral-500 p-3',

  }

  const mobile = {
    parentList: `border-b-2 border-black ${look ? ' bg-slate-200 text-black ' : ' '}`,
    parentLink: 'border-b-2 border-black flex items-center justify-between gap-3 w-full h-full p-3',

    itemUl: `z-10 text-sm bg-slate-200  w-full h-full ${look ? ' flex flex-col' : ' hidden'}`,
    itemList: 'px-3 group/second hover:bg-slate-300',
    itemLink: 'flex items-center justify-between gap-3 border-b-2 border-neutral-500 p-3',

    subItemUl: `bg-slate-300  w-max h-full ${lookItem ? ' flex flex-col' : ' hidden'}`,
    subItemList: 'relative px-3 ',
    subItemLink: 'block border-b-2 border-neutral-500 p-3',

    arrow: 'rotate-90'
  }


  return (
    <li  className={state ? desktop.parentList : mobile.parentList}>
      <Link onClick={()=>setLook(!look)} className={state ? desktop.parentLink : mobile.parentLink}><p>{title}</p> <FontAwesomeIcon icon={!state ? (look ? faClose : faArrowRight) : faArrowRight} className={state ? '' : mobile.arrow} /></Link>

      <ul className={state ? desktop.itemUl : mobile.itemUl }>
      
        {!items <= 0 && items.map(i => 
          <CatalogSubItem
            key={i.title}
            state={state}
            desktop={desktop}
            mobile={mobile}
            i={i}
            lookItem={lookItem}
            setLookItem={setLookItem}
          />
        )}
        
      </ul>
      
    </li> 
  )
}

export default CatalogItem