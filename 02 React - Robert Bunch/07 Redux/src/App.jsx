import { RouterProvider } from 'react-router-dom'
import rootRouter from './reactRouter/rootRouter.jsx'

import './App.css'

function App() {

  return (
    <RouterProvider router={rootRouter} />
  )
}

export default App
