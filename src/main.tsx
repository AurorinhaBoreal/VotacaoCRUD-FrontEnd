import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme';
import "./styles/main.css"
import { ChakraProvider } from '@chakra-ui/react'
import RoutesProvider from './routes/RoutesProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RoutesProvider/>
    </ChakraProvider>
  </React.StrictMode>,
)
