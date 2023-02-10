import React from 'react'
import { Link } from 'react-router-dom'

const CatalogItem = ({children}) => {
  return (
    <li  className='relative border-b-2 border-black group'>
      <Link className='block w-full h-full p-3'>{children}</Link>
      <ul className=' z-10 hidden absolute top-0 left-full p-5 bg-slate-200 group-hover:grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6 w-[60vw] '>
        <li><Link>Армированная стяжка пола</Link></li>
        <li><Link>Монтажная смесь</Link></li>
        <li><Link>Пескобетон М300</Link></li>
        <li><Link>Кладочные и монтажные смеси</Link></li>
        <li><Link>Сухие смеси М150 универсальные</Link></li>
        <li><Link>Бетоносмеситель</Link></li>
        <li><Link>Для машинного нанесения</Link></li>
        <li><Link>Для потолков и стен</Link></li>
        <li><Link>Фасадная штукатурка</Link></li>
        <li><Link>Декоративные штукатурки</Link></li>
        <li><Link>Для внутренней отделки</Link></li>
        <li><Link>Для отделки ванной комнаты</Link></li>
        <li><Link>Для отделки коридора</Link></li>
        <li><Link>Для отделки кухни</Link></li>
        <li><Link>Нанесение эффект Шуба</Link></li>
        <li><Link>Под бетон</Link></li>
        <li><Link>Декоративная штукатурка Короед</Link></li>
        <li><Link>Профиль маячковый</Link></li>
        
      </ul>
    </li> 
  )
}

export default CatalogItem