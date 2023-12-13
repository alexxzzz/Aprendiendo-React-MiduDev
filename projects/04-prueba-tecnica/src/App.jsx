import { useEffect, useState } from 'react'
import './app.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  // para recuperar el hecho
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // para recuperar la imagen teniendo la primera palabra del hecho
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 1)
    setImageURL(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=white`)
  }, [fact])

  return (
    <main>
      <h1>App</h1>
      {fact && <p>{fact}</p>} {/* renderizado condicional */}
      {imageURL && <img src={imageURL} alt={`Image extracted using the first word of ${fact}`} />}
    </main>
  )
}
