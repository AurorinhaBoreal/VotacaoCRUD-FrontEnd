import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme';
import "./styles/main.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './pages/SignUp/index.tsx';
import { ChakraProvider } from '@chakra-ui/react'
import NotFound from './pages/NotFound/index.tsx';
import AgendaActive from './pages/AgendaActive/index.tsx'
import AgendaEnded from './pages/AgendaEnded/index.tsx'
import Logs from './pages/Logs/index.tsx'

const router = createBrowserRouter([
  {
      path: "/",
      element: <SignUp/>
  },
  {
    path: "/agenda-active",
    element: <AgendaActive/>
  },
  {
    path: "/agenda-ended",
    element: <AgendaEnded/>
  },
  {
    path: "/logs",
    element: <Logs/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
