import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/api/items")
      .then((res) => {
        res.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <main>
      <h1>Example Webshop</h1>
    </main>
  );
}

export default App;
