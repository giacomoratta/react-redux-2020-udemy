import React, { useEffect, useState } from 'react'

const SearchBar = ({ onFormSubmit, defaultTerm }) => {
  const [term, setTerm] = useState('')

  // const onInputChange = (event) => {
  //   setTerm(event.target.value);
  // }; !useless!

  const onSubmit /* avoid naming collision with prop */ = (event) => {
    event.preventDefault()
    onFormSubmit(term)
  }

  useEffect(() => {
    setTerm(defaultTerm)
  },
  // [] /* one-time */);
  [defaultTerm] /* solve warning missing dependency */)

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onSubmit} className='ui form'>
        <div className='field'>
          <label>Video Search</label>
          <input
            type='text'
            value={term}
            onChange={/* onInputChange */ (event) => { setTerm(event.target.value) }}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
