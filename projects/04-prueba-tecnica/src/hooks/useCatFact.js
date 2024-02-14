import { useEffect, useState } from "react"
import {getRandomFact} from '../services/facts'

//mejor evitar que el custom hook devuelva el estado
export function useCatFact() {
    const [fact, setFact] = useState();
  
    const refreshRandomFact = () => {
      getRandomFact().then((newFact) => setFact(newFact));
    };
    // para recuperar el hecho al cargar la pagina
    useEffect(refreshRandomFact, []);
  
    return { fact, refreshRandomFact };
  };