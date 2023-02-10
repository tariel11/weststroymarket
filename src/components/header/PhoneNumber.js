import React from 'react'

const PhoneNumber = () => {
  return (
    <div className='hidden text-center md:block'> 
      <a href="tel:+7 999 999 99 99" className=' text-xl'>+7 999 999 99 99</a>
      <p className=' cursor-pointer text-xs bg-black text-white'>Заказать обоатный звонок</p>
    </div>
  )
}

export default PhoneNumber