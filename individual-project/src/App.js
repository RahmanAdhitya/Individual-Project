import './assets/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar/NavBar';
import Login from './pages/Login';
import HomePages from './pages/HomePages';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import user_types from './redux/types/users';

function App() {
  const [isAuthChecked, setIsAuthChaecked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const savedUserData = localStorage.getItem('user_data');

    if (savedUserData) {
      const parseUserData = JSON.parse(savedUserData);

      dispatch({
        type: user_types.LOGIN_USER,
        payload: parseUserData,
      });
    }
    setIsAuthChaecked(true);
  }, []);

  if (!isAuthChecked) {
    return <div>Loading...</div>;
  }

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
