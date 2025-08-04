const Header = () => {

  const number = 10;

  return(
    <header>
      <h1>header</h1>
      <p>
        number
        = {number}<br />
        number + 10
        = {number + 10}<br />
        {number % 2 == 0 ? "짝수" : "홀수"}
      </p>
    </header>
  );
}

export default Header; // 모듈화