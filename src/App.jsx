import { useState, useEffect } from 'react'
import './App.css'
// import { axios } from 'axios'

function App() {
  const [quote, setQuote] = useState('')

  function getAdvice(){
     fetch('https://type.fit/api/quotes')
     .then(resp => resp.json())
     .then(respData => {
      let randomNumber = Math.floor(Math.random()*respData.length)
      console.log(respData[randomNumber].text)
      setQuote(respData[randomNumber])
    })
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <div className="app">
        <div className="card">
          <p className="heading">{quote.text}</p>
          <p className='author'>-{quote.author ? quote.author : 'Anonymous' }-</p>       
        </div>
        <button className="button" onClick={getAdvice}>
            <span>GIVE ME ADVICE!</span>
        </button>
    </div>
  )
}

export default App
