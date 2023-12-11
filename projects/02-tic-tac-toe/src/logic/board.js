import { WINNER_COMBOS} from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras para saber si x u O ganó
    for (const combo of WINNER_COMBOS) {
        const [a,b,c] = combo
        if (
          boardToCheck[a] && // 0 -> x u o
          boardToCheck[a] == boardToCheck[b] && //
          boardToCheck[a] == boardToCheck[c]
        ){
          return boardToCheck[a]
        }
      }
      // Si no hay ganador
      return null
    }


export const checkEndGame = (newBoard) => {
          // revisamos si hay un empate si no hay mas espacios vacios
          return newBoard.every((square) => square !== null)
}
    