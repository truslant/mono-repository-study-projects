import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

import IndexRootPage from './pages/IndexRootPage';
import HomePage, { nowPlayingLoader } from './pages/HomePage';
import AboutPage, { singleMovieLoader } from './pages/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexRootPage />,
    children: [
      {
        index: true,
        id: 'home',
        loader: nowPlayingLoader,
        element: <HomePage />
      },
      {
        path: '/about/:movieId',
        id: 'about',
        loader: singleMovieLoader,
        element: <AboutPage />
      },
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
