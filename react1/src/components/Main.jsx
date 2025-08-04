const Main = () => {

  const fruits = ['apple', 'banana', 'peach']

  return (
    <main>
      <h2>main</h2>
      <ul>
        {fruits.map((f, index) => 
          <li key={index}>{f}</li>
        )}
      </ul>
    </main>
  );
}

export default Main;