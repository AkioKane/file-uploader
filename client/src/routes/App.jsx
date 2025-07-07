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
  const [data, setData] = useState(null);
  const [cookie, setCookie] = useState(null);
  const [updateCookie, setUpdateCookie] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await getData();
      setData(result);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/check-auth", {
        credentials: 'include'
      });
      const data = await response.json();
      console.log(data);
      setCookie(data);
    })();
  }, [updateCookie]);

  return (
    <>
      <div className="main">
        <Header cookie={cookie} />

        <div className="content">
          <Outlet context={{ setUpdateCookie }} />
        </div>
      </div>
    </>
  );
}

export default App;