import data from "./data.json";

function App() {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h1>{item.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
