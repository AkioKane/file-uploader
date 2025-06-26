import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/App.css';

async function getData() {
  try {
    const response = await fetch('/api/');
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    (async () => {
      const result = await getData();
      setData(result);
    })();
  }, []);

  return (
    <>
      <div className="main">
        <Header />

        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;