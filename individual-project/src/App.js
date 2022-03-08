import './assets/styles.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './component/NavBar/NavBar';
import Login from './pages/Login';
import HomePages from './pages/HomePages';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
