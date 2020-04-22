import React, {useState, useEffect} from 'react'
import useQuotes from './Utils/useQuotes'

import Icon from './icons'

const Quotes = () => {

  const {loading, quote, isError, fetchData} = useQuotes()

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>
    {isError && <h1>Somthing went wrong...</h1>}
    {loading ? 
    
    (<h2>Loading...</h2>) : 
    
    (
      <div className="quote__content">        
        <blockquote className="blockquote">
          <p className="mb-0">“{quote.content}”</p>
          <div className="blockquote-footer">{quote.author}</div>
        </blockquote>
        <button onClick={fetchData} className="learn-more">Refresh</button>
      </div>
    )}

    <div className="git">
      <a href="https://github.com/vadimghedreutan">
        <svg >
          <Icon name='git' />
        </svg>
      </a>
    </div>
    </>
  )
}

export default Quotes