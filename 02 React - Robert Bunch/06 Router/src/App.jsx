import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import RootPage from './pages/RootPage';
import HomePage from './pages/HomePage';
import HostPage from './pages/HostPage';
import HelpPage from './pages/HelpPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'host',
        element: <HostPage />
      },
      {
        path: 'help',
        element: <HelpPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'signup',
        element: <SignUpPage />
      }
    ]

  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
