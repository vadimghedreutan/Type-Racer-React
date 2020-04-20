import React, {useState, useEffect} from 'react'

import Icon from './icons'

const Quotes = () => {

  const [loading, setLoading] = useState(false)
  const [quote, setQuote] = useState([])
  const [isError, setError] = useState(false)
  const [url] = useState('https://api.quotable.io/random')


  async function fetchData()  {
    setError(false);
    setLoading(true);
    try {
      await fetch(url)
      .then(res => res.json())
      .then(data => setQuote(data))
    } catch (error) {
      setError(true)
    }
    setLoading(false);
  }

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