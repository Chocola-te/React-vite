import { useState } from 'react';
import './assets/style.css';
// import Game from './assets/GameCopy';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
// ---------------------------------------------------------------------------------
function Board({ xIsNext, squares, onPlay }) {
{/* true, [null(0), ..., null(8)], handlePlay */}
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }
  
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      </div>
      <div className="board-row">
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
      </div>
      <div className="board-row">
        <Square value={squares[10]} onSquareClick={() => handleClick(10)} />
        <Square value={squares[11]} onSquareClick={() => handleClick(11)} />
        <Square value={squares[12]} onSquareClick={() => handleClick(12)} />
        <Square value={squares[13]} onSquareClick={() => handleClick(13)} />
        <Square value={squares[14]} onSquareClick={() => handleClick(14)} />
      </div>
      <div className="board-row">
        <Square value={squares[15]} onSquareClick={() => handleClick(15)} />
        <Square value={squares[16]} onSquareClick={() => handleClick(16)} />
        <Square value={squares[17]} onSquareClick={() => handleClick(17)} />
        <Square value={squares[18]} onSquareClick={() => handleClick(18)} />
        <Square value={squares[19]} onSquareClick={() => handleClick(19)} />
      </div>
      <div className="board-row">
        <Square value={squares[20]} onSquareClick={() => handleClick(20)} />
        <Square value={squares[21]} onSquareClick={() => handleClick(21)} />
        <Square value={squares[22]} onSquareClick={() => handleClick(22)} />
        <Square value={squares[23]} onSquareClick={() => handleClick(23)} />
        <Square value={squares[24]} onSquareClick={() => handleClick(24)} />
      </div>
    </>
  );
}
// ---------------------------------------------------------------------------------
export default function Game() {
  const [history, setHistory] = useState(() => [Array(26).fill(null)]);
  /*
  [
    [null(0), ..., null(8)]
  ]
  */
  const [currentMove, setCurrentMove] = useState(0); // 몇번재 턴인지 저장
  // 0
  const xIsNext = currentMove % 2 === 0; // 짝수 턴: X, 홀수 턴: O
  // true
  const currentSquares = history[currentMove]; // 현재 턴의 게임판 상태
  // [null(0), ..., null(8)]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) { // 히스토리 클릭 시 해당 턴으로 이동
    if (currentMove === nextMove) {
      return;
    }

    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        {/* true, [null(0), ..., null(8)], handlePlay */}
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
      {/* <Game /> */}
    </div>
  );
}
// ---------------------------------------------------------------------------------
function calculateWinner(squares) {
  const lines = [
    // [0, 1, 2],
    // [3, 4, 5],
    // [6, 7, 8],
    // [0, 3, 6],
    // [1, 4, 7],
    // [2, 5, 8],
    // [0, 4, 8],
    // [2, 4, 6],
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
  ]; // 승리 조건
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];
    if (squares[a]
        && squares[a] === squares[b]
        && squares[a] === squares[c]
        && squares[a] === squares[d]
        && squares[a] === squares[e]
      ) {
      return squares[a];
    }
  }
  return null;
}
/*
Game
  - Board
    - Square
    - Square
    - Square
    ...
  - Move List

Square 클릭 → Board.handleClick() 호출.

클릭한 칸이 비어 있고, 승자가 없으면 새로운 배열(nextSquares) 생성.

onPlay(nextSquares)로 부모 Game에 전달.

Game은 history와 currentMove 업데이트 → 리렌더링 발생.

변경된 props를 다시 Board와 Square로 전달.

화면이 새 상태로 갱신됨.
*/