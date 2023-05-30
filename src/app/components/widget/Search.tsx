'use client'
import React, { useState } from 'react'

  interface searchField {
      name: string,
      placeholder: string,
      
  }

  const Search = ({name, placeholder }: searchField) => {
    
    const [values, setValues] = useState({
      search: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setValues({
          search: ''
      })
      
  }

  const onChange = async (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      setValues((prev) => ({...prev, [e.target.name]: e.target.value}))
      }
  return (
  <form onSubmit={handleSubmit}>
        {/* enter search icon here use position to put icon on the search field left side */}
        <input name ={name} value={values.search} placeholder={placeholder} 
        className='w-full py-1 pl-4 pr-24 text-sm border-2 rounded-md '
        onChange={onChange}
        />
    </form>
  )
}

export default Search