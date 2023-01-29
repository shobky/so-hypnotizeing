import React from 'react'
import { TfiSearch } from 'react-icons/tfi'
import { FiX } from 'react-icons/fi'

const SearchBar = ({close}) => {
    return (
        <div className='form_search-bar'>
            <div className='form_search-inner'>
                <TfiSearch className='search-ico' />
                <input placeholder='Type in to search...' className='search-input' />
            </div>
            <FiX onClick={() => close()} className='search-ico_x' />
        </div>
    )
}

export default SearchBar