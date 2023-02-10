import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { SEARCH_ROUTE } from '../../utils/consts';

const MyForm = () => {
  const navigate = useNavigate()

  const [searchQuery,setSearchQuery] = useState('')

  const handleSearch = (e) => {
    navigate(SEARCH_ROUTE + `/${searchQuery}`)
  }

  return (
    <form onSubmit={handleSearch} className='a border-solid border-2 rounded-md p-2 flex justify-between'>
      <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} type="text" className='w-full outline-none' placeholder='Поиск по магазину'/>
      <button type='submit'> <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> </button>
    </form>
  )
}

export default MyForm