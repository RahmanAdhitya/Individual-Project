import './assets/styles.css';
import { Box } from '@chakra-ui/react';
import Content from './component/Content/Content';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './component/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Box>
        <NavBar />
        <Content />
      </Box>
    </BrowserRouter>
  );
}

export default App;
