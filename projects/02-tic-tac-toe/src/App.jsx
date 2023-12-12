/* eslint-disable react/prop-types */
import { useState } from "react";
import confetti from "canvas-confetti";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { Turn } from "./components/Turn";
import { Board } from "./components/Board";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X; //el ?? mira si es null o undefined
  });

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  const updateBoard = (index) => {
    //no actualizamos la posicion si ya tiene algo
    if (board[index] || winner) return;

    // actualizar el estado del tablero
    const newBoard = [...board]; //spread y rest operator
    newBoard[index] = turn;
    setBoard(newBoard);

    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //Guardado de partida
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    //revisar si tenemos ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //empate
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset</button>

      <Board board={board} updateBoard={updateBoard} />

      <Turn turn={turn} />

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
