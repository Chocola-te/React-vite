import './style.css'
// function은 호이스팅되어 위쪽에서 호출 가능하고, 선언식이 깔끔해서 컴포넌트 정의에 자주 쓰임.
// 화살표 함수는 익명함수 표현식으로, 간결하지만 호이스팅 안되고 주로 이벤트 핸들러나 짧은 함수에 선호됨.

// 눈에 보이는 부분부터
function Square() {
  return (
    <button className='square'></button>
  );
}

// 1. 초기 상태 확인
// 3x3 기존 Game
// 5X5 신규 Game
export default function Game() {
  // history에 0~8index의 배열을 null값으로 저장
  const [history, setHistory] = useState(() => [Array(25).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // ※ 틀린 부분 
  // 짝수 저장이 아닌 currentMove % 2 === 0 -> true or false가 저장됨
  const xIsNext = currentMove % 2 === 0;
  // ※ 틀린 부분
  // history에서 currentMove의 index저장 -> history[currentMove(index번호)]가 아닌
  // history 배열의 전체가 저장됨
  const currentSquares = history[currentMove];

  // history에 nextSquares를 set해주기 위한 함수
  function handlePlay(nextSquares) {
    /*
    1. ...history 배열을 펼쳐
      [
        [null, null, null, ...] < 0번 index
      ] 아직은 0번 밖에 없고

    2. slice(0, 1) === 0번 인덱스의 배열을 복사
      [
        [null, null, null, ...], 
        nextSquares
      ]
    */
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // 위 2번의 배열을 history에 set
    setHistory(nextHistory);
    // 새로 저장한 nextHistory[[history.slice], nextSquares] 배열은 현재 2자리 이므로
    // -1해서 1을 currentMove에 set
    setCurrentMove(nextHistory.length - 1);
  };

  // currentMove에 nextMove를 set해주기 위한 함수
  function jumpTo(nextMove) {
    // 받은 nextMove(int)와 currentMove(int)가 같다면 아무 일도 하지않고
    if (currentMove === nextMove) {
      return;
    }
    // 같지 않다면 currentMove에 nextMove를 set
    setCurrentMove(nextMove);
  };

  // history[move(int)]를 기반으로 description의 메시지를 지정하고
  // jumpTo(move(int))메서드를 수행해 currentMove를 set
  // ※ 틀린 부분
  // = map에서 첫번째 매개변수는 배열요소(element)를, 두번재 매개변수는 index를 전달한다.
  //   <ol>{moves}</ol>에서 한번만 호출했어도 history 배열을 전체순환하기때문에
  //   history의 이중 배열 중 내부 배열의 개수에 따라 index의 번호를 자동으로 전달한다. ex) [[1], [2], [3], [4]]라면 3을 전달
  const moves = history.map((squares, move) => {
    // const여도 저장된 내부값은 변동될 수 있는데 왜 const로 쓰지않고 let으로 썼는가?
    // = 블럭 함수로 같은 변수명 재선언 불가한 옵션 외에
    //   객체 또는 배열 참조형 변수는 수정이 가능하지만 문자열, 숫자같은 원시 값은 수정이 불가능하기 때문
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      // html li에 key를 꼭 저장해야 하는 이유?
      // = 리스트를 렌더링할 때 key는 각 아이템을 고유하게 식별하는 역할
      //   리액트가 어떤 항목이 변경, 추가, 삭제됐는지 구분하기 어려워서 렌더링 효율이 떨어지고, 콘솔에 경고
      <li key={move}>
        {/* button을 클릭하면 jumpTo메서드에 받은 move를 넣고 동작 */}
        {/* jumpTo에 매개변수가 있기 때문에 화살표 함수를 이용해 사용 */}
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        {/* ol 리스트는 리스트 렌더링 시 숫자를 부여해줄 뿐 moves에 값을 넣어주진 않는다. */}
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

// 2. 전체 흐름을 막지 않으려면 중요한 함수라도 처음엔 임시로 처리하고, 나중에 완성
//    초기 상태인 Game()작성 후 그다음 필요한 부분 작성
export default function Board() {
  return (
    <>
      <div>
        <Square></Square>
      </div>
    </>
  );
}