import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/App.css';

function App() {
  return (
    <>
      <div className="main">
        <Header />

        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App;
