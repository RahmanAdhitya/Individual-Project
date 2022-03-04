import './assets/styles.css';
import { Box, Flex, Center, Spacer } from '@chakra-ui/react';
import Content from './component/Content/Content';

function App() {
  return (
    <Box>
      <Flex>
        <Box>margin</Box>
        <Spacer />
        <Box>content</Box>
        <Spacer />
        <Box>margin</Box>
      </Flex>

      <Content />
    </Box>
  );
}

export default App;
