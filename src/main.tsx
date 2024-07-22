import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './pages/SignUp.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import NotFound from './pages/NotFound.tsx'
import AgendaActive from './pages/AgendaActive.tsx'
import AgendaEnded from './pages/AgendaEnded.tsx'
import Logs from './pages/Logs.tsx'

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
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
