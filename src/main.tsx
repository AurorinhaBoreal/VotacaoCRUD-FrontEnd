import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme';
import "./styles/main.css"
import { ChakraProvider } from '@chakra-ui/react'
import RoutesProvider from './routes/RoutesProvider';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <RoutesProvider/>
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>,
)
