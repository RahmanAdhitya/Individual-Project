import './assets/styles.css';
import { Box } from '@chakra-ui/react';
import Content from './component/Content/Content';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './component/NavBar/NavBar';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
