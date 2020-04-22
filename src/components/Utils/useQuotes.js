import {useState} from 'react'

const useQuotes = () => {
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

  return {
    loading,
    quote,
    isError,
    fetchData
  }
}

export default useQuotes