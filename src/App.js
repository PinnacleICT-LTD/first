import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox, ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <ButtonGroup>
        <Button colorScheme="blue">Click Me</Button>
      </ButtonGroup>
    </ChakraProvider>
  );
}

export default App;
