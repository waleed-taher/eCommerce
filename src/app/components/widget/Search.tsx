import React, { ChangeEventHandler } from 'react'

interface searchField {
    name: string,
    value: string,
    placeholder: string,
    // onChange: ChangeEventHandler<HTMLInputElement>
}

const Search = ({name, value, placeholder, }: searchField) => {
  return (
    <div>
        {/* enter search icon here use position to put icon on the search field left side */}
        <input name ={name} value={value} placeholder={placeholder} className='border-2 rounded-md text-sm  w-full pl-4 pr-24 py-1  '/>
    </div>
  )
}

export default Search