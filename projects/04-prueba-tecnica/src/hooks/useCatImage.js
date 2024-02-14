import { useEffect, useState } from "react"

//custom hook debe empezar por use y seguir las reglas de los hooks
// en los custom hooks podemos usar otros hooks
export function useCatImage ({fact}) {
    const [imageURL, setImageURL] = useState()
  
     // para recuperar la imagen teniendo la primera palabra del hecho
     useEffect(() => {
      if (!fact) return
      const firstWord = fact.split(' ', 1)
      setImageURL(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=white`)
    }, [fact])
  
    return { imageURL }
  
  }

  